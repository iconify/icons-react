import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f_g7khbgm.css';
import '../../css/v/vmhtj-b2z.css';
import '../../css/k/kvy_b5bib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="f_g7khbgm"/><path class="vmhtj-b2z"/><path class="kvy_b5bib"/></g>`,
		"fallback": "streamline-freehand:currency-euro-dollar-exchange",
	});
}

export default Component;

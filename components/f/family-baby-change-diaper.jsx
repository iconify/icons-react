import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n03isqbif.css';
import '../../css/y/yki13rn8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="n03isqbif"/><path class="yki13rn8c"/></g>`,
		"fallback": "streamline-freehand:family-baby-change-diaper",
	});
}

export default Component;

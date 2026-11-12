import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/spqcbsbpc.css';
import '../../css/b/bggphacpj.css';
import '../../css/o/o_6_ttbwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="spqcbsbpc"/><path class="bggphacpj"/><path class="o_6_ttbwo"/></g>`,
		"fallback": "tabler:cash-pause",
	});
}

export default Component;

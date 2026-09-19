import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/ds-cv6but.css';
import '../../css/y/y6--uvbxg.css';

const viewBox = {"width":301,"height":181};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ds-cv6but"/><path class="y6--uvbxg"/></g>`,
		"fallback": "cif:bh",
	});
}

export default Component;

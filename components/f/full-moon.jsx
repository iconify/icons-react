import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ciqskgrxn.css';
import '../../css/c/c5a_m3jtk.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ciqskgrxn"/><circle class="c5a_m3jtk"/>`,
		"fallback": "openmoji:full-moon",
	});
}

export default Component;

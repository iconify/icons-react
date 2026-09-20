import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f2z6adcem.css';
import '../../css/a/aho2k-bdo.css';
import '../../css/m/mzaany7vl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f2z6adcem"/><path class="aho2k-bdo"/><path class="mzaany7vl"/></g>`,
		"fallback": "streamline-flex-color:airplane-disabled",
	});
}

export default Component;

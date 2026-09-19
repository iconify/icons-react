import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y_4vp8bgj.css';
import '../../css/n/nr2f0pbpu.css';
import '../../css/e/esvv2bcpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="y_4vp8bgj"/><path class="nr2f0pbpu"/><path class="esvv2bcpk"/></g>`,
		"fallback": "hugeicons:bed-single-02",
	});
}

export default Component;

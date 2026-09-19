import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a-pi4vqeb.css';
import '../../css/e/eciy7-bwj.css';
import '../../css/e/e3xegxdul.css';
import '../../css/k/kd2q2mdzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="a-pi4vqeb"/><path class="eciy7-bwj"/><path class="e3xegxdul"/><path class="kd2q2mdzv"/></g>`,
		"fallback": "iconoir:favourite-book",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0oa-qzdz.css';
import '../../css/q/qzrkyuben.css';
import '../../css/c/ch3dw1bwm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0oa-qzdz"/><path class="qzrkyuben"/><path class="ch3dw1bwm"/>`,
		"fallback": "energy-icons:cable-drum-20-bold",
	});
}

export default Component;

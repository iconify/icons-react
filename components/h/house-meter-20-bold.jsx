import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmgp-hp4m.css';
import '../../css/y/ylee2db2d.css';
import '../../css/a/ay1aj8o0x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmgp-hp4m"/><path class="ylee2db2d"/><path class="ay1aj8o0x"/>`,
		"fallback": "energy-icons:house-meter-20-bold",
	});
}

export default Component;

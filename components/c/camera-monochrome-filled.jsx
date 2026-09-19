import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmrc5cb8g.css';
import '../../css/o/oc2xyccjk.css';
import '../../css/v/vgo5klasq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmrc5cb8g"/><path class="oc2xyccjk"/><path class="vgo5klasq"/>`,
		"fallback": "boxicons:camera-monochrome-filled",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgh54ebqi.css';
import '../../css/r/rr5deojra.css';
import '../../css/q/qpyx_5ble.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgh54ebqi"/><path class="rr5deojra"/><path class="qpyx_5ble"/>`,
		"fallback": "streamline-ultimate:analytics-mountain-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk02wmbby.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk02wmbby"/>`,
		"fallback": "zmdi:device-hub",
	});
}

export default Component;

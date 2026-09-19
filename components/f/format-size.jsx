import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap4qq9qms.css';

const viewBox = {"width":408,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ap4qq9qms"/>`,
		"fallback": "zmdi:format-size",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrjwqcqqi.css';

const viewBox = {"width":512,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrjwqcqqi"/>`,
		"fallback": "zmdi:devices-off",
	});
}

export default Component;

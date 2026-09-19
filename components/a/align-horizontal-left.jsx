import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxo5babwe.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxo5babwe"/>`,
		"fallback": "fluent-mdl2:align-horizontal-left",
	});
}

export default Component;

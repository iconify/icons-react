import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2tz1nbgx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2tz1nbgx"/>`,
		"fallback": "fa6-solid:gas-pump",
	});
}

export default Component;

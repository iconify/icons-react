import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt2c23bjt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zt2c23bjt"/>`,
		"fallback": "heroicons-solid:device-tablet",
	});
}

export default Component;

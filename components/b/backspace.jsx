import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv_u8_zon.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yv_u8_zon"/>`,
		"fallback": "heroicons-solid:backspace",
	});
}

export default Component;

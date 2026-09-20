import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk3i2mpof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk3i2mpof"/>`,
		"fallback": "thesvg:gleam",
	});
}

export default Component;

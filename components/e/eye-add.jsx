import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5lb52u8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5lb52u8d"/>`,
		"fallback": "mdi:eye-add",
	});
}

export default Component;

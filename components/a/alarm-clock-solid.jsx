import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szpxu3l4e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="szpxu3l4e"/>`,
		"fallback": "streamline:alarm-clock-solid",
	});
}

export default Component;

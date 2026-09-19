import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_ch8bbse.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p_ch8bbse"/>`,
		"fallback": "heroicons-solid:bell-snooze",
	});
}

export default Component;

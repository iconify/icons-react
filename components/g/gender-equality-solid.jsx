import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzvuxdb5h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mzvuxdb5h"/>`,
		"fallback": "streamline:gender-equality-solid",
	});
}

export default Component;

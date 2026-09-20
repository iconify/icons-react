import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubcjzxw5n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ubcjzxw5n"/>`,
		"fallback": "streamline:front-camera-solid",
	});
}

export default Component;

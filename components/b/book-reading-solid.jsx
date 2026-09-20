import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amkv8ubhj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="amkv8ubhj"/>`,
		"fallback": "streamline:book-reading-solid",
	});
}

export default Component;

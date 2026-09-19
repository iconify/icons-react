import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es9lm-b4n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="es9lm-b4n"/>`,
		"fallback": "heroicons-solid:code",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esny0jbie.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="esny0jbie"/>`,
		"fallback": "heroicons-solid:arrow-circle-up",
	});
}

export default Component;

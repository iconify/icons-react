import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1wbr87ga.css';

const viewBox = {"width":507,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1wbr87ga"/>`,
		"fallback": "file-icons:caddy",
	});
}

export default Component;

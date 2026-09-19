import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1e6c0b8p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1e6c0b8p"/>`,
		"fallback": "dashicons:album",
	});
}

export default Component;

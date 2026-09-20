import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no9dh2d2f.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="no9dh2d2f"/>`,
		"fallback": "wi:degrees",
	});
}

export default Component;

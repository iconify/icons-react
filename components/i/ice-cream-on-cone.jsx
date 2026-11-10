import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq2zj9bol.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq2zj9bol"/>`,
		"fallback": "pinhead:ice-cream-on-cone",
	});
}

export default Component;

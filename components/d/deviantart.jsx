import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d77g6mbfz.css';

const viewBox = {"width":464,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d77g6mbfz"/>`,
		"fallback": "ps:deviantart",
	});
}

export default Component;

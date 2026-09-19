import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-fdedcse.css';

const viewBox = {"width":360,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-fdedcse"/>`,
		"fallback": "ps:check-box",
	});
}

export default Component;

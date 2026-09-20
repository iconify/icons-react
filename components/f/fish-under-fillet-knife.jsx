import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-o8tex9u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-o8tex9u"/>`,
		"fallback": "pinhead:fish-under-fillet-knife",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj_uv5o9p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj_uv5o9p"/>`,
		"fallback": "pinhead:book-with-raised-cover",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5o0g-62r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5o0g-62r"/>`,
		"fallback": "garden:copy-fill-20",
	});
}

export default Component;

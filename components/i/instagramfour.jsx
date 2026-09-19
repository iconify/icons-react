import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly1cq7tta.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly1cq7tta"/>`,
		"fallback": "whh:instagramfour",
	});
}

export default Component;

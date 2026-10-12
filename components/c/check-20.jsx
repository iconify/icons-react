import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdxrnm0ph.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdxrnm0ph"/>`,
		"fallback": "garden:check-20",
	});
}

export default Component;

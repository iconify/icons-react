import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1tg5un7g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1tg5un7g"/>`,
		"fallback": "garden:email-fill-16",
	});
}

export default Component;

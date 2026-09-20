import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdx309bys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdx309bys"/>`,
		"fallback": "ri:align-item-bottom-line",
	});
}

export default Component;

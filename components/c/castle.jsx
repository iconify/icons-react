import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2nysfb4v.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2nysfb4v"/>`,
		"fallback": "memory:castle",
	});
}

export default Component;

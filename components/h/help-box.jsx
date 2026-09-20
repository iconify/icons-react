import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uerdgg5ek.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uerdgg5ek"/>`,
		"fallback": "memory:help-box",
	});
}

export default Component;

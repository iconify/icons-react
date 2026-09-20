import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8yx3mb3v.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8yx3mb3v"/>`,
		"fallback": "memory:beer",
	});
}

export default Component;

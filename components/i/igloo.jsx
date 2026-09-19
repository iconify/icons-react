import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axz0cqh8f.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axz0cqh8f"/>`,
		"fallback": "fa7-solid:igloo",
	});
}

export default Component;

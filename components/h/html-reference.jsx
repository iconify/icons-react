import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujqjk4b9t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujqjk4b9t"/>`,
		"fallback": "carbon:html-reference",
	});
}

export default Component;

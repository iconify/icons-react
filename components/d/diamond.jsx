import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9lco3atb.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9lco3atb"/>`,
		"fallback": "memory:diamond",
	});
}

export default Component;

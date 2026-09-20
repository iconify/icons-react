import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlvp0pbyy.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlvp0pbyy"/>`,
		"fallback": "memory:box-outer-light-up-right-stipple",
	});
}

export default Component;

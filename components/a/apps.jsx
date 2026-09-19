import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5rdg-bmb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5rdg-bmb"/>`,
		"fallback": "carbon:apps",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zeadyab1k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zeadyab1k"/>`,
		"fallback": "carbon:deployment-unit-execution",
	});
}

export default Component;

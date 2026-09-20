import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euw05tbjl.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="euw05tbjl"/>`,
		"fallback": "memory:circle",
	});
}

export default Component;

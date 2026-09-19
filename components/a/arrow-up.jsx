import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/entb44w_c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="entb44w_c"/>`,
		"fallback": "carbon:arrow-up",
	});
}

export default Component;

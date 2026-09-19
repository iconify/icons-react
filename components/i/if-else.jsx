import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te45mhbsl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="te45mhbsl"/>`,
		"fallback": "carbon:if-else",
	});
}

export default Component;

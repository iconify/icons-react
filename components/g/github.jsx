import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex2v2vb8e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex2v2vb8e"/>`,
		"fallback": "formkit:github",
	});
}

export default Component;

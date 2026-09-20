import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9li8s_7q.css';
import '../../css/e/ex0rr4b0p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9li8s_7q"/><path class="ex0rr4b0p"/>`,
		"fallback": "material-icon-theme:craco",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmv704bom.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmv704bom"/>`,
		"fallback": "bi:check",
	});
}

export default Component;

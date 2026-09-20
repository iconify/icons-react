import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wism3vaym.css';
import '../../css/g/g-jfchbvd.css';
import '../../css/c/ca-fg8z8v.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wism3vaym"/><path class="g-jfchbvd"/><path class="ca-fg8z8v"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-guyana",
	});
}

export default Component;

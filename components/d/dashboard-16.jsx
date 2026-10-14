import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6chbzybu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6chbzybu"/>`,
		"fallback": "octicon:dashboard-16",
	});
}

export default Component;

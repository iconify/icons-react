import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk9_gubeh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk9_gubeh"/>`,
		"fallback": "codicon:arrow-small-up",
	});
}

export default Component;

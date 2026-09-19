import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0anp0nkm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0anp0nkm"/>`,
		"fallback": "codicon:developer-tools",
	});
}

export default Component;

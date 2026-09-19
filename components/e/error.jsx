import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krsl0u_ak.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krsl0u_ak"/>`,
		"fallback": "codicon:error",
	});
}

export default Component;

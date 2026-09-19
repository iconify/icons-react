import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbhgw8bdh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbhgw8bdh"/>`,
		"fallback": "codicon:debug-alt-small",
	});
}

export default Component;

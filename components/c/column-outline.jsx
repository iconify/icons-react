import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9l5ppbgt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9l5ppbgt"/>`,
		"fallback": "lsicon:column-outline",
	});
}

export default Component;

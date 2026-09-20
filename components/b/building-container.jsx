import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l93bm11qx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l93bm11qx"/>`,
		"fallback": "roentgen:building-container",
	});
}

export default Component;

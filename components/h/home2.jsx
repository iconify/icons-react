import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl5sv6bqj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dl5sv6bqj"/>`,
		"fallback": "icomoon-free:home2",
	});
}

export default Component;

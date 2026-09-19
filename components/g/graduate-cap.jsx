import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_hw5drjx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_hw5drjx"/>`,
		"fallback": "charm:graduate-cap",
	});
}

export default Component;

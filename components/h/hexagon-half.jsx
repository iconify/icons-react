import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vf7x3vv8c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vf7x3vv8c"/>`,
		"fallback": "bi:hexagon-half",
	});
}

export default Component;

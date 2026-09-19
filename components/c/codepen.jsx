import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me7di4b0g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="me7di4b0g"/>`,
		"fallback": "icomoon-free:codepen",
	});
}

export default Component;

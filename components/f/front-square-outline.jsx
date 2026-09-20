import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y05r1sudp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y05r1sudp"/>`,
		"fallback": "lsicon:front-square-outline",
	});
}

export default Component;

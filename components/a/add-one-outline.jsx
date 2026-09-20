import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz4-e3b6u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz4-e3b6u"/>`,
		"fallback": "lsicon:add-one-outline",
	});
}

export default Component;

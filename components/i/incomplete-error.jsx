import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd6_5ub6c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd6_5ub6c"/>`,
		"fallback": "carbon:incomplete-error",
	});
}

export default Component;

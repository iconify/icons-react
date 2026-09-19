import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o59q0tj2u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o59q0tj2u"/>`,
		"fallback": "carbon:building-electrical",
	});
}

export default Component;

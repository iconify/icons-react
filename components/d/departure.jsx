import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/magta5rkj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="magta5rkj"/>`,
		"fallback": "carbon:departure",
	});
}

export default Component;

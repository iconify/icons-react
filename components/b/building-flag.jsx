import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/js926xula.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="js926xula"/>`,
		"fallback": "fa6-solid:building-flag",
	});
}

export default Component;

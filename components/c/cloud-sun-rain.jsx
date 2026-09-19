import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9cy3fv7b.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9cy3fv7b"/>`,
		"fallback": "fa6-solid:cloud-sun-rain",
	});
}

export default Component;

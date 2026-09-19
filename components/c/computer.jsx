import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y58ycfb9t.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y58ycfb9t"/>`,
		"fallback": "fa6-solid:computer",
	});
}

export default Component;

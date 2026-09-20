import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx5e0zz-u.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx5e0zz-u"/>`,
		"fallback": "memory:glasses",
	});
}

export default Component;

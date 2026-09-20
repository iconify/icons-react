import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-px0gyax.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-px0gyax"/>`,
		"fallback": "memory:bell",
	});
}

export default Component;

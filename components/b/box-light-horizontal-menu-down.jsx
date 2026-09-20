import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc8olxbuu.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sc8olxbuu"/>`,
		"fallback": "memory:box-light-horizontal-menu-down",
	});
}

export default Component;

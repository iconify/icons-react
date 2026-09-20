import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm42jgy4b.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm42jgy4b"/>`,
		"fallback": "memory:box-light-horizontal-menu-up",
	});
}

export default Component;

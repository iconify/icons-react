import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru2_96wgf.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru2_96wgf"/>`,
		"fallback": "memory:box-light-up-left-circle",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjvmhcc6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjvmhcc6v"/>`,
		"fallback": "iconamoon:arrow-up-3-square-light",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajk5vybrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajk5vybrj"/>`,
		"fallback": "iconamoon:arrow-bottom-left-3-square-bold",
	});
}

export default Component;

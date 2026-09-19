import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z65jc1l0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z65jc1l0w"/>`,
		"fallback": "iconamoon:arrow-down-2-fill",
	});
}

export default Component;

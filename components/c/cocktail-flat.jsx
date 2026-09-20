import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxefnlkuu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yxefnlkuu"/>`,
		"fallback": "streamline-flex-color:cocktail-flat",
	});
}

export default Component;

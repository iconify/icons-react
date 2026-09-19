import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjh781b6k.css';

const viewBox = {"width":15,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjh781b6k"/>`,
		"fallback": "fontisto:blood-drop",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w86o90byj.css';

const viewBox = {"width":481,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w86o90byj"/>`,
		"fallback": "file-icons:apl",
	});
}

export default Component;

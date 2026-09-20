import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v53dtq5ix.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v53dtq5ix"/>`,
		"fallback": "uiw:circle-check-o",
	});
}

export default Component;

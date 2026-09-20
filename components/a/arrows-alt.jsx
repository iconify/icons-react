import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/modwem2lm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="modwem2lm"/>`,
		"fallback": "uiw:arrows-alt",
	});
}

export default Component;

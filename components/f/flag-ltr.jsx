import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h05hsvrra.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h05hsvrra"/>`,
		"fallback": "ooui:flag-ltr",
	});
}

export default Component;

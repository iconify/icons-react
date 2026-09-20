import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htbxum14x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htbxum14x"/>`,
		"fallback": "ooui:check",
	});
}

export default Component;

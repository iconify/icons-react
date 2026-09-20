import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akz0ez_3s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akz0ez_3s"/>`,
		"fallback": "uiw:heart-off",
	});
}

export default Component;

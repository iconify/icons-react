import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gk_72ebot.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gk_72ebot"/>`,
		"fallback": "fluent-mdl2:folder-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap8e4tb7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ap8e4tb7e"/>`,
		"fallback": "coolicons:folder-lock-corner-fill-round",
	});
}

export default Component;

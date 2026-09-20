import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap42-obbb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ap42-obbb"/>`,
		"fallback": "streamline:horizontal-menu-circle-remix",
	});
}

export default Component;

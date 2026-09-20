import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6og42bcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e6og42bcr"/>`,
		"fallback": "streamline-logos:bilibili-logo-solid",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwt6abcmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xwt6abcmh"/>`,
		"fallback": "lucide:app-window-mac-plus",
	});
}

export default Component;

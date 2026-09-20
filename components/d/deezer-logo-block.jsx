import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgj48d40s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bgj48d40s"/>`,
		"fallback": "streamline-logos:deezer-logo-block",
	});
}

export default Component;

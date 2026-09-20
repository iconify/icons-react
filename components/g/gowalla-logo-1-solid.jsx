import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llf52oz0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="llf52oz0z"/>`,
		"fallback": "streamline-logos:gowalla-logo-1-solid",
	});
}

export default Component;

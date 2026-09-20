import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt3uecrng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pt3uecrng"/>`,
		"fallback": "streamline-logos:instagram-logo-1-solid",
	});
}

export default Component;

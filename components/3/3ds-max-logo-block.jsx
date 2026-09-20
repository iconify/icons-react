import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abvwlk7nh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="abvwlk7nh"/>`,
		"fallback": "streamline-logos:3ds-max-logo-block",
	});
}

export default Component;

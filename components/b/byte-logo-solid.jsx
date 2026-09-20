import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbq79ncoz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dbq79ncoz"/>`,
		"fallback": "streamline-logos:byte-logo-solid",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9_-_eiow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p9_-_eiow"/>`,
		"fallback": "streamline-logos:arch-linux-logo-block",
	});
}

export default Component;

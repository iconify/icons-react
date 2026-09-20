import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kaz-7ebrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kaz-7ebrm"/>`,
		"fallback": "streamline-logos:arch-linux-logo",
	});
}

export default Component;

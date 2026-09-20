import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjw0-gioz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjw0-gioz"/>`,
		"fallback": "tdesign:gesture-up-2",
	});
}

export default Component;

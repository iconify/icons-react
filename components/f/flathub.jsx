import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpfy7f3fe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpfy7f3fe"/>`,
		"fallback": "thesvg-color:flathub",
	});
}

export default Component;

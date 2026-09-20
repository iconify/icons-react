import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aowv02_fx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aowv02_fx"/>`,
		"fallback": "thesvg-color:icinga",
	});
}

export default Component;

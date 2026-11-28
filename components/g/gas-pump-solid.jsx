import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nw899db7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nw899db7p"/>`,
		"fallback": "iconaut:gas-pump-solid",
	});
}

export default Component;

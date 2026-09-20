import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tliw611xy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tliw611xy"/>`,
		"fallback": "streamline-logos:app-store-logo-solid",
	});
}

export default Component;

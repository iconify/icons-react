import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcu5i0bjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcu5i0bjg"/>`,
		"fallback": "token:dbc",
	});
}

export default Component;

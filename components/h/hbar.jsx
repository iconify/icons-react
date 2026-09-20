import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk6zr-wff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wk6zr-wff"/>`,
		"fallback": "token:hbar",
	});
}

export default Component;

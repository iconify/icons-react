import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wef4vzbfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wef4vzbfc"/>`,
		"fallback": "cbi:fluval-fx2-logo",
	});
}

export default Component;

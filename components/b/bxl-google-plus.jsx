import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxtb5xbbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxtb5xbbl"/>`,
		"fallback": "bx:bxl-google-plus",
	});
}

export default Component;

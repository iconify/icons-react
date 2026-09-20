import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdlcd8-wb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdlcd8-wb"/>`,
		"fallback": "mdi:douban",
	});
}

export default Component;

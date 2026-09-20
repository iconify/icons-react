import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j6mkb3bse.css';
import '../../css/z/z_96fnbmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j6mkb3bse"/><path class="z_96fnbmf"/></g>`,
		"fallback": "mage:home-plus",
	});
}

export default Component;

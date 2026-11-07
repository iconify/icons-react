import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gbgga5b1v.css';
import '../../css/j/j8_7y3biq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gbgga5b1v"/><path class="j8_7y3biq"/></g>`,
		"fallback": "solar:home-line-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w4b2-ebns.css';
import '../../css/e/ev0s3udxe.css';
import '../../css/a/a5bhuku2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="w4b2-ebns"/><path class="ev0s3udxe"/><path class="a5bhuku2t"/></g>`,
		"fallback": "solar:football-line-duotone",
	});
}

export default Component;

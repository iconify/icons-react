import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wyt8hgbsx.css';
import '../../css/i/ib2dn6bwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wyt8hgbsx"/><path class="ib2dn6bwi"/></g>`,
		"fallback": "hugeicons:chart-area",
	});
}

export default Component;

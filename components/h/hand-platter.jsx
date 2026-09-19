import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oh8kmobjf.css';
import '../../css/k/kxmnzabbx.css';
import '../../css/d/d-_z4m5uh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="oh8kmobjf"/><path class="kxmnzabbx"/><path class="d-_z4m5uh"/></g>`,
		"fallback": "hugeicons:hand-platter",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zds-drrip.css';
import '../../css/g/gsp36vw2y.css';
import '../../css/t/tcw2d1t9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zds-drrip"/><path class="gsp36vw2y"/><path class="tcw2d1t9y"/></g>`,
		"fallback": "solar:gallery-add-linear",
	});
}

export default Component;

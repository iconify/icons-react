import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/njny9tb1g.css';
import '../../css/k/k710rqb2o.css';
import '../../css/l/lnitt9mus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="njny9tb1g"/><path class="k710rqb2o"/><path class="lnitt9mus"/></g>`,
		"fallback": "hugeicons:ds3-tool",
	});
}

export default Component;

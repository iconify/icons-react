import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v2cunjb9g.css';
import '../../css/y/ycf5eoiwe.css';
import '../../css/n/njufilbcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v2cunjb9g"/><path class="ycf5eoiwe"/><path class="njufilbcs"/></g>`,
		"fallback": "solar:code-linear",
	});
}

export default Component;

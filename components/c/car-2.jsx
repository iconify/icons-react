import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/w/welwrs0wp.css';
import '../../css/u/ucysj7t_m.css';
import '../../css/n/nhbi39eqa.css';
import '../../css/g/gugw1tbkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="welwrs0wp"/><path class="ucysj7t_m"/><path class="nhbi39eqa"/><path class="gugw1tbkc"/></g>`,
		"fallback": "streamline-sharp-color:car-2",
	});
}

export default Component;

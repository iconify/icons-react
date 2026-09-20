import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/v/v1i9zeb3v.css';
import '../../css/q/q27aehs6m.css';
import '../../css/e/e6dp90nwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="v1i9zeb3v"/><path class="q27aehs6m"/></g><path class="e6dp90nwl"/></g>`,
		"fallback": "solar:bomb-bold-duotone",
	});
}

export default Component;

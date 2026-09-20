import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tysx2_1ah.css';
import '../../css/v/v3q7psv2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tysx2_1ah"/><path class="v3q7psv2a"/></g>`,
		"fallback": "reicon:bell-ring-duotone",
	});
}

export default Component;

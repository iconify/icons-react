import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xr-uw36at.css';
import '../../css/n/nk4uw0zqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xr-uw36at"/><path class="nk4uw0zqp"/></g>`,
		"fallback": "proicons:foldable-horizontal-half",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dp-5hsb4o.css';
import '../../css/a/a0uztybii.css';
import '../../css/v/vv84ivqmt.css';
import '../../css/k/k1vu8ccyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="dp-5hsb4o wm-shadow"/><path class="a0uztybii"/><path class="vv84ivqmt"/><path class="k1vu8ccyb"/></g>`,
		"fallback": "withicons-retro:gem",
	});
}

export default Component;

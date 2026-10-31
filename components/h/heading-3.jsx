import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/h0m6sdfml.css';
import '../../css/w/wkab_zovm.css';
import '../../css/t/ty8j8obsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="h0m6sdfml"/><path class="wkab_zovm"/><path class="ty8j8obsl wm-s"/></g>`,
		"fallback": "withicons-retro:heading-3",
	});
}

export default Component;

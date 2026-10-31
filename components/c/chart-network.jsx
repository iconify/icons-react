import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uosdec8zw.css';
import '../../css/o/o0rfrzbdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="uosdec8zw"/><path class="o0rfrzbdj"/></g>`,
		"fallback": "withicons-retro:chart-network",
	});
}

export default Component;

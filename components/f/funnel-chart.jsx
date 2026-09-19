import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_r0etraf.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_r0etraf"/>`,
		"fallback": "fluent-mdl2:funnel-chart",
	});
}

export default Component;

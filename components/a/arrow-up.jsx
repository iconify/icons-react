import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsod67gbj.css';
import '../../css/r/rc7mtqb4o.css';
import '../../css/y/y0wqglbrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rsod67gbj"><path class="rc7mtqb4o"/><path class="y0wqglbrp"/></g>`,
		"fallback": "matita:arrow-up",
	});
}

export default Component;

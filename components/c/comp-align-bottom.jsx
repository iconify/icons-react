import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sqqlng0bi.css';
import '../../css/g/gx_2bj22m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="sqqlng0bi"/><path class="gx_2bj22m"/></g>`,
		"fallback": "iconoir:comp-align-bottom",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/go5qx8a4v.css';
import '../../css/z/zbuz9ebso.css';
import '../../css/g/gu9f0qb-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="go5qx8a4v"/><path class="zbuz9ebso"/><path class="gu9f0qb-o"/></g>`,
		"fallback": "hugeicons:bitcoin-safe",
	});
}

export default Component;

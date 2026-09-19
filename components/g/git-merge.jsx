import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rl6wtq2mk.css';
import '../../css/g/gtz0pnw7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rl6wtq2mk"/><path class="gtz0pnw7r"/></g>`,
		"fallback": "hugeicons:git-merge",
	});
}

export default Component;

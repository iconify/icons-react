import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i2dbcnb3o.css';
import '../../css/c/cuc314b8j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i2dbcnb3o"/><path class="cuc314b8j"/></g>`,
		"fallback": "bi:controller",
	});
}

export default Component;

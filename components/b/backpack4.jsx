import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vigr70i4d.css';
import '../../css/g/gaur6mbii.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vigr70i4d"/><path class="gaur6mbii"/></g>`,
		"fallback": "bi:backpack4",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ymrsgxbyw.css';
import '../../css/b/bia602b3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ymrsgxbyw"/><path class="bia602b3q"/></g>`,
		"fallback": "hugeicons:chart-breakout-square",
	});
}

export default Component;

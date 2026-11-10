import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pnqf9xb-m.css';
import '../../css/d/d1gtvkbbd.css';
import '../../css/r/rup194bda.css';
import '../../css/u/u36v7kbiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pnqf9xb-m"/><rect transform="matrix(-1 0 0 1 18.167 8.917)" class="d1gtvkbbd"/><path class="rup194bda"/><path class="u36v7kbiy"/></g>`,
		"fallback": "proicons:figma",
	});
}

export default Component;

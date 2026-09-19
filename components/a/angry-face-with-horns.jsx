import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xz2d1xbtd.css';
import '../../css/o/oy3llbbra.css';
import '../../css/z/zaf1byp1g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xz2d1xbtd"/><path class="oy3llbbra"/><path class="zaf1byp1g"/></g>`,
		"fallback": "fluent-emoji-high-contrast:angry-face-with-horns",
	});
}

export default Component;

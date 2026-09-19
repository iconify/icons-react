import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e7qalcvkx.css';
import '../../css/z/zstsy57rt.css';
import '../../css/e/e9-d_ex8e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="e7qalcvkx"/><path class="zstsy57rt"/><path class="e9-d_ex8e"/></g>`,
		"fallback": "glyphs-poly:arrow-square",
	});
}

export default Component;

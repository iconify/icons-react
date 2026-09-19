import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b1znrzx2a.css';
import '../../css/i/i3dorvb1g.css';
import '../../css/h/h6k4ikgxz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b1znrzx2a"/><path clip-rule="evenodd" class="i3dorvb1g"/><path clip-rule="evenodd" class="h6k4ikgxz"/></g>`,
		"fallback": "glyphs-poly:boxing-glove",
	});
}

export default Component;

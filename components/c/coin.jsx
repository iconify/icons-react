import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ygxrgebqz.css';
import '../../css/y/yts6p_bsd.css';
import '../../css/b/b8-7g1_4e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ygxrgebqz"/><ellipse class="yts6p_bsd"/><path class="b8-7g1_4e"/></g>`,
		"fallback": "glyphs-poly:coin",
	});
}

export default Component;

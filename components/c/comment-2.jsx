import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jbrmr6bbt.css';
import '../../css/b/b63-0qqnv.css';
import '../../css/h/h_macgb-z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jbrmr6bbt"/><path class="b63-0qqnv"/><rect class="h_macgb-z"/></g>`,
		"fallback": "glyphs-poly:comment-2",
	});
}

export default Component;

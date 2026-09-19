import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yk6ie_5mn.css';
import '../../css/r/rjd7ks-cj.css';
import '../../css/o/o5x5qit7g.css';
import '../../css/c/c3quwww_w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yk6ie_5mn"/><path clip-rule="evenodd" class="rjd7ks-cj"/><path class="o5x5qit7g"/><path clip-rule="evenodd" class="c3quwww_w"/></g>`,
		"fallback": "glyphs:highlighter-outline",
	});
}

export default Component;

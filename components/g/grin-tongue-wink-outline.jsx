import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wga77dzqj.css';
import '../../css/s/sg8-s5bcj.css';
import '../../css/x/xd-c0hbzx.css';
import '../../css/w/wg-9_kb5r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wga77dzqj"/><path clip-rule="evenodd" class="sg8-s5bcj"/><path class="xd-c0hbzx"/><path clip-rule="evenodd" class="wg-9_kb5r"/></g>`,
		"fallback": "glyphs:grin-tongue-wink-outline",
	});
}

export default Component;

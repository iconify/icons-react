import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/i86l_hb5y.css';
import '../../css/g/g2xclxbug.css';
import '../../css/j/jkj5y8biz.css';
import '../../css/y/yd-bdcbtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="i86l_hb5y wm-deco"/><path class="g2xclxbug wm-deco"/><path class="jkj5y8biz wm-k"/><path class="wm-a yd-bdcbtt"/></g>`,
		"fallback": "withicons:captions-blueprint",
	});
}

export default Component;

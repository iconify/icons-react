import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yypbjckaa.css';
import '../../css/q/qhxtnjb-w.css';
import '../../css/b/bw3tr2qkv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yypbjckaa"/><path class="qhxtnjb-w"/><path class="bw3tr2qkv"/></g>`,
		"fallback": "glyphs-poly:baby",
	});
}

export default Component;

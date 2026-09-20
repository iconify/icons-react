import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/j/jt69e0bks.css';
import '../../css/u/u7cv2seej.css';
import '../../css/a/ahgo_fbcw.css';
import '../../css/y/yotexyb-d.css';
import '../../css/z/zdt08wb2e.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="jt69e0bks"/><path class="u7cv2seej"/><path class="ahgo_fbcw"/><path class="yotexyb-d"/><path class="zdt08wb2e"/></g>`,
		"fallback": "skill-icons:gmail-light",
	});
}

export default Component;

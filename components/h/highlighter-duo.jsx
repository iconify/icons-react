import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z98sztzgg.css';
import '../../css/j/jgr-ou_0r.css';
import '../../css/t/tvc6zw-sb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z98sztzgg"/><path class="jgr-ou_0r"/><path class="tvc6zw-sb wm-a"/></g>`,
		"fallback": "withicons:highlighter-duo",
	});
}

export default Component;

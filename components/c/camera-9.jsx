import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/h/he3atfblp.css';
import '../../css/w/wzr97ccqs.css';
import '../../css/a/a5q5w8kcg.css';
import '../../css/d/dcy9y1b8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="he3atfblp"/><path class="wzr97ccqs"/><path class="a5q5w8kcg"/><path class="dcy9y1b8u"/></g>`,
		"fallback": "streamline-cyber:camera-9",
	});
}

export default Component;

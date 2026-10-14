import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/k/k_6msqblp.css';
import '../../css/x/x39lywbmx.css';
import '../../css/c/cmekjibeu.css';
import '../../css/x/x9lf62b7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="k_6msqblp"/><path class="x39lywbmx"/><path class="cmekjibeu"/><path class="x9lf62b7r"/></g>`,
		"fallback": "matita:hourglass",
	});
}

export default Component;

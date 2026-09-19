import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/i/ijx6_9_ho.css';
import '../../css/q/qj1xicbfz.css';
import '../../css/l/ljmmiybfc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="y6f0jibvm"/><path class="ijx6_9_ho"/><path class="qj1xicbfz"/><path class="ljmmiybfc"/></g>`,
		"fallback": "icon-park:bytedance-mini-app",
	});
}

export default Component;

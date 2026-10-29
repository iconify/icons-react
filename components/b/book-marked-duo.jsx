import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/umh6vabqg.css';
import '../../css/k/kwybaobhx.css';
import '../../css/j/jfb-yjbgw.css';
import '../../css/q/qaz17vbsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="umh6vabqg"/><path class="kwybaobhx wm-a"/><path class="jfb-yjbgw"/><path class="qaz17vbsh"/></g>`,
		"fallback": "withicons:book-marked-duo",
	});
}

export default Component;

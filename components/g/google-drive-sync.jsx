import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kk2njkbuf.css';
import '../../css/q/qo1f1obln.css';
import '../../css/b/bhgumod8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kk2njkbuf"/><path class="qo1f1obln"/><path class="bhgumod8b"/></g>`,
		"fallback": "iconoir:google-drive-sync",
	});
}

export default Component;

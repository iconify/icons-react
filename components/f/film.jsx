import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kk9_s9btc.css';
import '../../css/p/pg0ow4lpj.css';
import '../../css/q/qyhe7cbhy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kk9_s9btc"/><path clip-rule="evenodd" class="pg0ow4lpj"/><path class="qyhe7cbhy"/></g>`,
		"fallback": "streamline-flex-color:film",
	});
}

export default Component;

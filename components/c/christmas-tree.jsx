import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ow6ccdaev.css';
import '../../css/t/t1218ih7n.css';
import '../../css/l/l6j4bjmfq.css';
import '../../css/y/yndm5-cln.css';
import '../../css/d/dxd5tgbgh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ow6ccdaev"/><path class="t1218ih7n"/><path class="l6j4bjmfq"/><path class="yndm5-cln"/><path class="dxd5tgbgh"/></g>`,
		"fallback": "fluent-emoji-flat:christmas-tree",
	});
}

export default Component;

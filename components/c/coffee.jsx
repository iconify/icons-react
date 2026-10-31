import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/m/m8zv555nq.css';
import '../../css/a/akdv00bxe.css';
import '../../css/r/rilhjbure.css';
import '../../css/l/lpvdy8b7o.css';
import '../../css/g/g9g2iobxb.css';
import '../../css/p/pxgkxs6mo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="m8zv555nq"/><path class="akdv00bxe"/><path class="rilhjbure wm-shine"/><path class="lpvdy8b7o wm-k"/><path class="g9g2iobxb wm-a"/><path class="pxgkxs6mo"/></g>`,
		"fallback": "withicons-kawaii:coffee",
	});
}

export default Component;

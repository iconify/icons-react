import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/d/d_gtx6-4w.css';
import '../../css/n/nmdl3nrdn.css';
import '../../css/z/z7h9dmbpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="d_gtx6-4w"/><path class="nmdl3nrdn"/><rect class="z7h9dmbpz"/></g>`,
		"fallback": "mage:divide-square",
	});
}

export default Component;

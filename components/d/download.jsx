import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/pe-9es50i.css';
import '../../css/e/e4rf4ybtc.css';
import '../../css/b/b1yfy4bkn.css';
import '../../css/o/o-du-vbfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="pe-9es50i wm-shadow"/><path class="e4rf4ybtc wm-shadow"/><path class="b1yfy4bkn"/><path class="o-du-vbfa"/></g>`,
		"fallback": "withicons-brutal:download",
	});
}

export default Component;

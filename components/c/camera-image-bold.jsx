import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3kb4cgpl.css';
import '../../css/y/y5ywfkbiz.css';
import '../../css/n/nb60d5bfg.css';
import '../../css/l/lg_mi-u6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="r3kb4cgpl"><path class="y5ywfkbiz"/><circle class="nb60d5bfg"/><path class="lg_mi-u6k"/></g>`,
		"fallback": "iconamoon:camera-image-bold",
	});
}

export default Component;

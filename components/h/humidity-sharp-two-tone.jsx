import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/wkaubtbym.css';
import '../../css/d/d7v8u-bbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="wkaubtbym"/><path class="d7v8u-bbg"/></g>`,
		"fallback": "keyline-icons:humidity-sharp-two-tone",
	});
}

export default Component;

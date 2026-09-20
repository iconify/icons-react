import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pgcml6wvh.css';
import '../../css/s/sfau_ib-n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="pgcml6wvh"/><path class="sfau_ib-n"/></g>`,
		"fallback": "streamline-flex:feather-pen",
	});
}

export default Component;

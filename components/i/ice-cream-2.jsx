import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dhb72pb4c.css';
import '../../css/s/sy_2o_-hk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="dhb72pb4c"/><path class="sy_2o_-hk"/></g>`,
		"fallback": "streamline-flex:ice-cream-2",
	});
}

export default Component;

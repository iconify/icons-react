import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vjm1sqb8y.css';
import '../../css/s/s99bkf27r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vjm1sqb8y"/><path class="s99bkf27r"/></g>`,
		"fallback": "streamline-flex:high-speed-train-front",
	});
}

export default Component;

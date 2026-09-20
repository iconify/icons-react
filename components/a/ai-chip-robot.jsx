import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/z_tt50bhn.css';
import '../../css/h/hgyxkqn8m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="z_tt50bhn"/><path class="hgyxkqn8m"/></g>`,
		"fallback": "streamline-flex:ai-chip-robot",
	});
}

export default Component;

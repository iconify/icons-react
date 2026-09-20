import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vfvglqbeo.css';
import '../../css/w/wweep-kmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vfvglqbeo"/><path class="wweep-kmo"/></g>`,
		"fallback": "streamline-cyber:bin",
	});
}

export default Component;

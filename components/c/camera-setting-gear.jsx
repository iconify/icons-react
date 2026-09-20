import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/h20gs_bcq.css';
import '../../css/n/n-wi292rt.css';
import '../../css/m/me_kv8bpm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="h20gs_bcq"/><path class="n-wi292rt"/><path class="me_kv8bpm"/></g>`,
		"fallback": "streamline-flex:camera-setting-gear",
	});
}

export default Component;

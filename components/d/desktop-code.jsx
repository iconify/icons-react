import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/s_1fus9uv.css';
import '../../css/v/vq-8krbvi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="s_1fus9uv"/><path class="vq-8krbvi"/></g>`,
		"fallback": "streamline:desktop-code",
	});
}

export default Component;

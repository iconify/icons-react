import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gh0u9p_zb.css';
import '../../css/m/mxlh2qtol.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gh0u9p_zb"/><path class="mxlh2qtol"/></g>`,
		"fallback": "streamline:compass-navigator",
	});
}

export default Component;

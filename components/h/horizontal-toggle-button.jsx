import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/a7p_n66dl.css';
import '../../css/t/t82f5-99m.css';
import '../../css/y/yc1yqsu3y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="a7p_n66dl"/><path class="t82f5-99m"/><path class="yc1yqsu3y"/></g>`,
		"fallback": "streamline-flex:horizontal-toggle-button",
	});
}

export default Component;

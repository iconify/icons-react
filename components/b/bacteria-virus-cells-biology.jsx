import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wm3b64bfa.css';
import '../../css/z/zh6991blz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="wm3b64bfa"/><path class="zh6991blz"/></g>`,
		"fallback": "streamline:bacteria-virus-cells-biology",
	});
}

export default Component;

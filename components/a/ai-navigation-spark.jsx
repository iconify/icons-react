import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dc7m5m3qf.css';
import '../../css/r/rg4c5v1zh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="dc7m5m3qf"/><path class="rg4c5v1zh"/></g>`,
		"fallback": "streamline:ai-navigation-spark",
	});
}

export default Component;

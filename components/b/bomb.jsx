import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wzual34ou.css';
import '../../css/x/xuph5foty.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="wzual34ou"/><path class="xuph5foty"/></g>`,
		"fallback": "streamline:bomb",
	});
}

export default Component;

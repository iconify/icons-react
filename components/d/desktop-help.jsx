import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/laayx1b1m.css';
import '../../css/d/di9v63u5i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="laayx1b1m"/><path class="di9v63u5i"/></g>`,
		"fallback": "streamline:desktop-help",
	});
}

export default Component;

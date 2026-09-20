import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/t9lnp1q9o.css';
import '../../css/x/xd9yqtb7z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="t9lnp1q9o"/><path class="xd9yqtb7z"/></g>`,
		"fallback": "streamline:incognito-mode",
	});
}

export default Component;

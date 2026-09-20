import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/ar6dc5b9u.css';
import '../../css/d/d2mkp_yxd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ar6dc5b9u"/><path class="d2mkp_yxd"/></g>`,
		"fallback": "streamline-flex:incognito-mode",
	});
}

export default Component;

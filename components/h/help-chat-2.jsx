import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/ufvzu_zlz.css';
import '../../css/x/xa0r2wb8a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ufvzu_zlz"/><path class="xa0r2wb8a"/></g>`,
		"fallback": "streamline:help-chat-2",
	});
}

export default Component;

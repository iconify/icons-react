import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kbjhs5f7m.css';
import '../../css/b/ba3q_ko_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="kbjhs5f7m"/><path class="ba3q_ko_u"/></g>`,
		"fallback": "streamline-logos:evernote-logo",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pqvlswbsg.css';
import '../../css/w/wtz6py-0f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="pqvlswbsg"/><path class="wtz6py-0f"/></g>`,
		"fallback": "streamline:business-profession-home-office",
	});
}

export default Component;

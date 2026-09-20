import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mrpspzzxn.css';
import '../../css/a/am5v7neqy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="mrpspzzxn"/><path class="am5v7neqy"/></g>`,
		"fallback": "streamline:epic-games-1",
	});
}

export default Component;

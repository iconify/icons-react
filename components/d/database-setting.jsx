import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jkq-aob7p.css';
import '../../css/j/joocz52rk.css';
import '../../css/r/rwent3ohb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jkq-aob7p"/><path class="joocz52rk"/><path class="rwent3ohb"/></g>`,
		"fallback": "streamline:database-setting",
	});
}

export default Component;

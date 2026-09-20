import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qw_1ds19j.css';
import '../../css/g/gg-w16b7c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="qw_1ds19j"/><path class="gg-w16b7c"/></g>`,
		"fallback": "streamline:chess-bishop",
	});
}

export default Component;

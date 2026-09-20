import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/t7pb-5bxc.css';
import '../../css/r/rzx936pqq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="t7pb-5bxc"/><path class="rzx936pqq"/></g>`,
		"fallback": "streamline:hand-held-tablet-writing",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kvfrdcc4t.css';
import '../../css/t/t-fia2bgw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="kvfrdcc4t"/><path class="t-fia2bgw"/></g>`,
		"fallback": "streamline:calendar-jump-to-date",
	});
}

export default Component;

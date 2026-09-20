import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gyeb2ub6b.css';
import '../../css/l/lvbytobuw.css';
import '../../css/i/il_w3lb9x.css';
import '../../css/s/swcafebnn.css';
import '../../css/s/sva1zl7tw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gyeb2ub6b"/><path class="lvbytobuw"/><path class="il_w3lb9x"/><path class="swcafebnn"/><path class="sva1zl7tw"/></g>`,
		"fallback": "streamline-cyber-color:business-male-megaphone",
	});
}

export default Component;

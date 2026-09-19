import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/iqb53xbyn.css';
import '../../css/k/k6dwz-brd.css';
import '../../css/u/ujlmsm8dc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="iqb53xbyn"/><path class="k6dwz-brd"/><path class="ujlmsm8dc"/></g>`,
		"fallback": "hugeicons:french-fries-02",
	});
}

export default Component;

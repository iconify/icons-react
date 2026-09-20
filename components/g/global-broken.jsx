import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/ko6o-6b9b.css';
import '../../css/f/ftf5x2bie.css';
import '../../css/r/rcpuhpb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ko6o-6b9b"/><path class="ftf5x2bie"/><path class="rcpuhpb4g"/></g>`,
		"fallback": "solar:global-broken",
	});
}

export default Component;

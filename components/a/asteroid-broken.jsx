import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s_2vhhbre.css';
import '../../css/r/r0co290mr.css';
import '../../css/v/vdr2_oflg.css';
import '../../css/f/fn05xqh8q.css';
import '../../css/k/ko6o-6b9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s_2vhhbre"/><path class="r0co290mr"/><path class="vdr2_oflg"/><path class="fn05xqh8q"/><path class="ko6o-6b9b"/></g>`,
		"fallback": "solar:asteroid-broken",
	});
}

export default Component;

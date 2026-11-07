import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s_2vhhbre.css';
import '../../css/b/b4zsg0i8r.css';
import '../../css/v/vdr2_oflg.css';
import '../../css/y/yt7fn_nsy.css';
import '../../css/k/ko6o-6b9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s_2vhhbre"/><path class="b4zsg0i8r"/><path class="vdr2_oflg"/><path class="yt7fn_nsy"/><path class="ko6o-6b9b"/></g>`,
		"fallback": "solar:asteroid-broken",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rl1w8_nfg.css';
import '../../css/b/bqah07bcj.css';
import '../../css/s/s5fo-_2td.css';
import '../../css/t/tw7t0e8hs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rl1w8_nfg"/><path class="bqah07bcj"/><path class="s5fo-_2td"/><path class="tw7t0e8hs"/></g>`,
		"fallback": "hugeicons:hospital-bed-01",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pu-d0tb1r.css';
import '../../css/z/zdwtwyb7k.css';
import '../../css/x/x80r5fgtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="pu-d0tb1r"/><path class="wm-a zdwtwyb7k"/><path class="wm-s x80r5fgtb"/></g>`,
		"fallback": "withicons:christmas-candle-solid",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fqc_a9awg.css';
import '../../css/j/j-k-8fbjh.css';
import '../../css/y/yo_1dtgkp.css';
import '../../css/y/yu9sii_3x.css';
import '../../css/g/gyp90cb4j.css';
import '../../css/w/w2vappbii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="fqc_a9awg"/><path class="j-k-8fbjh wm-a"/><path class="wm-s yo_1dtgkp"/><path class="wm-s yu9sii_3x"/><path class="gyp90cb4j"/><path class="w2vappbii wm-a"/></g>`,
		"fallback": "withicons:christmas-candle-duo",
	});
}

export default Component;

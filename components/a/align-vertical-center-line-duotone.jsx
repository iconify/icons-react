import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pcm8qqhpn.css';
import '../../css/j/jttm9ch_g.css';
import '../../css/a/avlf34b0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pcm8qqhpn"/><path class="jttm9ch_g"/><path class="avlf34b0a"/></g>`,
		"fallback": "solar:align-vertical-center-line-duotone",
	});
}

export default Component;

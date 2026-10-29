import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n032jcw_n.css';
import '../../css/i/i-ko7r1rt.css';
import '../../css/f/f3qmz0s7a.css';
import '../../css/a/aomk_sbrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="n032jcw_n"/><path class="i-ko7r1rt wm-a"/><path class="f3qmz0s7a wm-k"/><path class="aomk_sbrv wm-a"/></g>`,
		"fallback": "withicons:bot-sketch",
	});
}

export default Component;

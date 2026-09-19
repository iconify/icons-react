import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sr_q189-e.css';
import '../../css/x/x5np3ybje.css';
import '../../css/s/s_n-c25fe.css';
import '../../css/q/qmqxr7c2u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sr_q189-e"/><path class="x5np3ybje"/><path class="s_n-c25fe"/><path class="qmqxr7c2u"/></g>`,
		"fallback": "glyphs:burn-duo",
	});
}

export default Component;

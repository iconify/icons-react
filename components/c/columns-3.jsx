import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jh-d33clr.css';
import '../../css/r/r74-q9tpf.css';
import '../../css/x/xyfv7bced.css';
import '../../css/e/e1njw3nwf.css';
import '../../css/g/gaynqtcvf.css';
import '../../css/i/imcr3si2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jh-d33clr wm-shadow"/><path class="r74-q9tpf"/><path class="xyfv7bced"/><path class="e1njw3nwf"/><path class="gaynqtcvf"/><path class="imcr3si2g"/></g>`,
		"fallback": "withicons-retro:columns-3",
	});
}

export default Component;

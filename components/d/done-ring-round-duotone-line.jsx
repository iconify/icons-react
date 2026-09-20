import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvsj4rbkk.css';
import '../../css/i/ir9v20b1w.css';
import '../../css/k/ko_ykp8oh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="yvsj4rbkk"/><path class="ir9v20b1w"/><path class="ko_ykp8oh"/></g>`,
		"fallback": "lets-icons:done-ring-round-duotone-line",
	});
}

export default Component;

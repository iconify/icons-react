import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/ydgy_wbel.css';
import '../../css/t/t218te2ox.css';
import '../../css/m/mq1ml1bev.css';
import '../../css/u/u3oj7pbmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco ydgy_wbel"/><path class="t218te2ox wm-deco"/><path class="mq1ml1bev wm-k"/><path class="u3oj7pbmo wm-k"/></g>`,
		"fallback": "withicons:git-merge-blueprint",
	});
}

export default Component;

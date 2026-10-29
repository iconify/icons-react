import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vlkwl-34d.css';
import '../../css/k/kfbj6uzww.css';
import '../../css/k/k_lneb11t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vlkwl-34d"/><path class="kfbj6uzww wm-a"/><path class="k_lneb11t"/></g>`,
		"fallback": "withicons:archive-restore-duo",
	});
}

export default Component;

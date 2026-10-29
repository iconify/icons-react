import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rir49oswk.css';
import '../../css/q/qbet6fbaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="rir49oswk"/><path class="qbet6fbaw wm-a"/></g>`,
		"fallback": "withicons:arrow-up-left-duo",
	});
}

export default Component;

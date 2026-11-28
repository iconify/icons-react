import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm0ajvejj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/ppt3q08ns.css';
import '../../css/a/az6mvhbpu.css';
import '../../css/f/f221bg_-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm0ajvejj secondary"/><g class="dt0cm9dhy primary"><path class="ppt3q08ns"/><path class="az6mvhbpu"/><path class="f221bg_-b"/></g>`,
		"fallback": "iconaut:chart-funnel-duo",
	});
}

export default Component;

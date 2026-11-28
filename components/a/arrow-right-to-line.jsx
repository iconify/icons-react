import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bobh2gb4b.css';
import '../../css/z/z7ntss-zu.css';
import '../../css/s/swgz-mbqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bobh2gb4b"/><path class="z7ntss-zu"/><path class="swgz-mbqn"/></g>`,
		"fallback": "iconaut:arrow-right-to-line",
	});
}

export default Component;

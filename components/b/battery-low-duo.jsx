import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hh6tl_orr.css';
import '../../css/o/opxwitb3e.css';
import '../../css/n/nn2sdrbun.css';
import '../../css/g/go5n_1h8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="hh6tl_orr"/><path class="opxwitb3e wm-a"/><path class="nn2sdrbun"/><path class="go5n_1h8p wm-a"/></g>`,
		"fallback": "withicons:battery-low-duo",
	});
}

export default Component;

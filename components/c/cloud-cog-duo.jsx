import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xde85hb4d.css';
import '../../css/f/fsubt_s9k.css';
import '../../css/w/w199b4q7i.css';
import '../../css/m/m2ebxhp-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="xde85hb4d"/><path class="fsubt_s9k wm-s"/><path class="w199b4q7i wm-s"/><path class="m2ebxhp-u"/></g>`,
		"fallback": "withicons:cloud-cog-duo",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m9su60b7m.css';
import '../../css/t/twz7tgb0j.css';
import '../../css/l/lktwn-bjm.css';
import '../../css/r/r5kh_gsbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="m9su60b7m"/><path class="twz7tgb0j wm-a"/><path class="lktwn-bjm"/><path class="r5kh_gsbw wm-a"/></g>`,
		"fallback": "withicons:file-output-duo",
	});
}

export default Component;

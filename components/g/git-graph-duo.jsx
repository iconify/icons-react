import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f0enc1btv.css';
import '../../css/r/rh8-4rbaj.css';
import '../../css/m/mrpjhzbvf.css';
import '../../css/e/e1kj5y_ub.css';
import '../../css/z/zn3w76bgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="f0enc1btv"/><path class="rh8-4rbaj wm-a"/><path class="mrpjhzbvf"/><path class="e1kj5y_ub wm-a"/><path class="wm-a zn3w76bgy"/></g>`,
		"fallback": "withicons:git-graph-duo",
	});
}

export default Component;

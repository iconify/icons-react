import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/eqyqj9bbr.css';
import '../../css/s/sg46neb7i.css';
import '../../css/m/m5u5l5b7g.css';
import '../../css/j/jrm8jlzgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="eqyqj9bbr"/><path class="sg46neb7i wm-a"/><path class="m5u5l5b7g wm-a"/><path class="jrm8jlzgh"/></g>`,
		"fallback": "withicons:drill-duo",
	});
}

export default Component;

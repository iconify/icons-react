import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k699nsb-a.css';
import '../../css/h/hph1o5byz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k699nsb-a"/><path class="hph1o5byz"/></g>`,
		"fallback": "griddy-icons:cleaver",
	});
}

export default Component;

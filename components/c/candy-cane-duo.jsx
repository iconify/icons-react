import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/suq9n5bcz.css';
import '../../css/u/uya6wcbfz.css';
import '../../css/k/k4kerw0_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="suq9n5bcz"/><path class="uya6wcbfz wm-a"/><path class="k4kerw0_e"/></g>`,
		"fallback": "withicons:candy-cane-duo",
	});
}

export default Component;

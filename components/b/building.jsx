import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/euhc06b6i.css';
import '../../css/r/r309anzoi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="euhc06b6i"/><path class="r309anzoi wm-a"/></g>`,
		"fallback": "withicons:building",
	});
}

export default Component;

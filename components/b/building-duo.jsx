import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uhidrxbyb.css';
import '../../css/r/r309anzoi.css';
import '../../css/e/euhc06b6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="uhidrxbyb"/><path class="r309anzoi wm-a"/><path class="euhc06b6i"/></g>`,
		"fallback": "withicons:building-duo",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/foupoebia.css';
import '../../css/r/rad68db9z.css';
import '../../css/l/lhr7mp78x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="foupoebia"/><path class="rad68db9z wm-a"/><path class="lhr7mp78x"/></g>`,
		"fallback": "withicons:cloud-rain-wind-duo",
	});
}

export default Component;

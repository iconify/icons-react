import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/foupoebia.css';
import '../../css/d/dwntyeyxt.css';
import '../../css/l/lhr7mp78x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="foupoebia"/><path class="dwntyeyxt wm-a"/><path class="lhr7mp78x"/></g>`,
		"fallback": "withicons:cloud-rain-duo",
	});
}

export default Component;

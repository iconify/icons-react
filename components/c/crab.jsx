import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xc-svt7gp.css';
import '../../css/y/y0ulzgbpm.css';
import '../../css/v/vbgdlybic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xc-svt7gp"/><ellipse class="y0ulzgbpm"/><path class="vbgdlybic"/></g>`,
		"fallback": "lucide-lab:crab",
	});
}

export default Component;

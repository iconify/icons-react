import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mviaxgb2v.css';
import '../../css/o/obsscdhly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mviaxgb2v"/><circle class="obsscdhly"/></g>`,
		"fallback": "lucide-lab:doorbell-intercom",
	});
}

export default Component;

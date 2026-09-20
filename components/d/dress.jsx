import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g-rkjwb4d.css';
import '../../css/n/nwv_6tb8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g-rkjwb4d"/><path class="nwv_6tb8n"/></g>`,
		"fallback": "lucide-lab:dress",
	});
}

export default Component;

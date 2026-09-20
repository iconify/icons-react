import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wgwkdac6p.css';
import '../../css/h/h2hrvybra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wgwkdac6p"/><path class="h2hrvybra"/></g>`,
		"fallback": "lucide-lab:bottle-plastic",
	});
}

export default Component;

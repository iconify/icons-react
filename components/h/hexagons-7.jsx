import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ahytozbix.css';
import '../../css/w/w6xnrhb8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ahytozbix"/><path class="w6xnrhb8s"/></g>`,
		"fallback": "lucide-lab:hexagons-7",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vk2v0obvm.css';
import '../../css/f/fnwqvcbpt.css';
import '../../css/s/ssh18kvpm.css';
import '../../css/c/cy575_3sr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vk2v0obvm"/><path class="fnwqvcbpt"/><path class="ssh18kvpm"/><path class="cy575_3sr"/></g>`,
		"fallback": "lucide-extended:book-image-duotone",
	});
}

export default Component;

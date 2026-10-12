import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f8z9d9b0z.css';
import '../../css/q/qoq05sboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f8z9d9b0z"/><path class="qoq05sboc"/></g>`,
		"fallback": "lucide-extended:flame-duotone",
	});
}

export default Component;

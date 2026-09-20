import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r8dwktc0i.css';
import '../../css/q/qkzndobnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r8dwktc0i"/><path class="qkzndobnz"/></g>`,
		"fallback": "lucide-lab:houses",
	});
}

export default Component;

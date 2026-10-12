import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q5t4tsbnm.css';
import '../../css/s/sftrilwvg.css';
import '../../css/f/fj5lt5vqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q5t4tsbnm"/><path class="sftrilwvg"/><path class="fj5lt5vqk"/></g>`,
		"fallback": "lucide-extended:gallery-thumbnails-duotone",
	});
}

export default Component;

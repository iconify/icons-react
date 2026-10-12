import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q46nnxvvs.css';
import '../../css/n/njcu-gbyk.css';
import '../../css/c/co57jkb0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q46nnxvvs"/><path class="njcu-gbyk"/><path class="co57jkb0w"/></g>`,
		"fallback": "lucide-extended:blender-duotone",
	});
}

export default Component;

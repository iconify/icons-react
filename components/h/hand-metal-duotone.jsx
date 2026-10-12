import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lx9cd6bvj.css';
import '../../css/e/e7e4msb7l.css';
import '../../css/v/vw068acij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lx9cd6bvj"/><path class="e7e4msb7l"/><path class="vw068acij"/></g>`,
		"fallback": "lucide-extended:hand-metal-duotone",
	});
}

export default Component;

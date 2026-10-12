import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/axxlsd9lf.css';
import '../../css/k/kfsef_njm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="axxlsd9lf"/><path class="kfsef_njm"/></g>`,
		"fallback": "lucide-extended:chess-knight-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uh27c8byi.css';
import '../../css/a/agaaot7xz.css';
import '../../css/p/p2etqnb1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uh27c8byi"/><path class="agaaot7xz"/><path class="p2etqnb1e"/></g>`,
		"fallback": "lucide-extended:bird-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/auythtbir.css';
import '../../css/i/i_a881b4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="auythtbir"/><path class="i_a881b4t"/></g>`,
		"fallback": "lucide-extended:brick-wall-duotone",
	});
}

export default Component;

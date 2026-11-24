import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u-phzvb1a.css';
import '../../css/y/y6xol00dx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u-phzvb1a"/><path class="y6xol00dx"/></g>`,
		"fallback": "lucide-extended:grid-3x2-duotone",
	});
}

export default Component;

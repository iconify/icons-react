import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u6k2wgbfk.css';
import '../../css/l/lx2bb-bjy.css';
import '../../css/c/c8yfngb2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u6k2wgbfk"/><path class="lx2bb-bjy"/><path class="c8yfngb2d"/></g>`,
		"fallback": "lucide-extended:diagram-sankey-duotone",
	});
}

export default Component;

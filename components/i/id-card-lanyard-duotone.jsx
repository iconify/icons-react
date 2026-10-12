import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l72e9vj4g.css';
import '../../css/u/uh3jeubfp.css';
import '../../css/a/aw_ok7bnp.css';
import '../../css/w/wkwew6efo.css';
import '../../css/i/i3sr6la4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l72e9vj4g"/><path class="uh3jeubfp"/><path class="aw_ok7bnp"/><path class="wkwew6efo"/><path class="i3sr6la4p"/></g>`,
		"fallback": "lucide-extended:id-card-lanyard-duotone",
	});
}

export default Component;

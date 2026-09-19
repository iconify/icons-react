import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/l6-iy8s0j.css';
import '../../css/c/cqteb8bfj.css';
import '../../css/v/vd35ges3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="l6-iy8s0j"/><path class="cqteb8bfj"/><path class="vd35ges3z"/></g>`,
		"fallback": "iconoir:instagram",
	});
}

export default Component;

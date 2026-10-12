import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g2by2f8cm.css';
import '../../css/r/r-lr4020s.css';
import '../../css/o/oochcfc2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g2by2f8cm"/><path class="r-lr4020s"/><path class="oochcfc2g"/></g>`,
		"fallback": "lucide-extended:cuboid-duotone",
	});
}

export default Component;

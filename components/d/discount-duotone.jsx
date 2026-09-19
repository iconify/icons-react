import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lu312zpbh.css';
import '../../css/e/e5wxxab2j.css';
import '../../css/g/garbl4k2i.css';
import '../../css/x/xy6fdrbaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lu312zpbh"/><path class="e5wxxab2j"/><path class="garbl4k2i"/><path class="xy6fdrbaq"/></g>`,
		"fallback": "iconamoon:discount-duotone",
	});
}

export default Component;

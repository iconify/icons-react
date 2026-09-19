import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jqhxjsr4l.css';
import '../../css/s/sd4a-hbjg.css';
import '../../css/x/x7_6_gd4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jqhxjsr4l"/><path class="sd4a-hbjg"/><path class="x7_6_gd4d"/></g>`,
		"fallback": "iconamoon:badge-duotone",
	});
}

export default Component;

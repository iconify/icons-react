import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s6154jvgb.css';
import '../../css/h/hb9fpsbpg.css';

const viewBox = {"width":74,"height":74};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s6154jvgb"/><path class="hb9fpsbpg"/></g>`,
		"fallback": "thesvg-color:heroui-dark",
	});
}

export default Component;

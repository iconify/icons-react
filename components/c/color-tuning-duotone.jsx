import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ca6l3jo0i.css';
import '../../css/k/k0dgbfb8l.css';
import '../../css/e/ekwdemmlb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ca6l3jo0i"/><path class="k0dgbfb8l"/><path class="ekwdemmlb"/></g>`,
		"fallback": "reicon:color-tuning-duotone",
	});
}

export default Component;

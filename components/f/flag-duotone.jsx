import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pm9pl1ybw.css';
import '../../css/g/gfbv8te1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pm9pl1ybw"/><path class="gfbv8te1m"/></g>`,
		"fallback": "iconamoon:flag-duotone",
	});
}

export default Component;

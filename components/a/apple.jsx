import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dmbvezfkt.css';
import '../../css/m/m8842cbyn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dmbvezfkt"/><path class="m8842cbyn"/></g>`,
		"fallback": "icon-park:apple",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0649ib9x.css';
import '../../css/e/e6u7bf88s.css';
import '../../css/n/nyx-ipbaz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0649ib9x"/><path class="e6u7bf88s"/><path class="nyx-ipbaz"/>`,
		"fallback": "energy-icons:hydraulic-press-20",
	});
}

export default Component;

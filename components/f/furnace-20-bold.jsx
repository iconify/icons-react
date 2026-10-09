import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzijosb1g.css';
import '../../css/h/hg3-fcc3e.css';
import '../../css/x/xbitz5bna.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzijosb1g"/><path class="hg3-fcc3e"/><path class="xbitz5bna"/>`,
		"fallback": "energy-icons:furnace-20-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nh6gu7bbw.css';
import '../../css/u/utcfm6g2i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nh6gu7bbw"/><path class="utcfm6g2i"/>`,
		"fallback": "energy-icons:backpack-48",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbiesybpo.css';
import '../../css/h/hxd8jsd4c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbiesybpo"/><path class="hxd8jsd4c"/>`,
		"fallback": "energy-icons:carbon-negative-48",
	});
}

export default Component;

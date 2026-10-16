import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7wahub6s.css';
import '../../css/j/j0ltuoz_j.css';
import '../../css/s/sd-l4j7ce.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7wahub6s"/><path class="j0ltuoz_j"/><path class="sd-l4j7ce"/>`,
		"fallback": "energy-icons:gangway-20",
	});
}

export default Component;

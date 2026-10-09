import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmgp-hp4m.css';
import '../../css/r/rdst0hbya.css';
import '../../css/y/yulc80b1h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmgp-hp4m"/><path class="rdst0hbya"/><path class="yulc80b1h"/>`,
		"fallback": "energy-icons:house-search-20-bold",
	});
}

export default Component;

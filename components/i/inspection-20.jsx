import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3anlkbiz.css';
import '../../css/k/kemupybsm.css';
import '../../css/a/add8lcush.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3anlkbiz"/><path class="kemupybsm"/><path class="add8lcush"/>`,
		"fallback": "energy-icons:inspection-20",
	});
}

export default Component;

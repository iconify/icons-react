import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aegej5mnd.css';
import '../../css/o/oyd37-buh.css';
import '../../css/n/nryc-8-0d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aegej5mnd"/><path class="oyd37-buh"/><path class="nryc-8-0d"/>`,
		"fallback": "energy-icons:cnc-machine-20-bold",
	});
}

export default Component;

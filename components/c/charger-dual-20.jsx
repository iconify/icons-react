import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv4p-irnn.css';
import '../../css/m/moo4i7zmp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv4p-irnn"/><path class="moo4i7zmp"/>`,
		"fallback": "energy-icons:charger-dual-20",
	});
}

export default Component;

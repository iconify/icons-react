import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpeye7b8j.css';
import '../../css/t/trobavbbl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpeye7b8j"/><path class="trobavbbl"/>`,
		"fallback": "energy-icons:anemometer-20-bold",
	});
}

export default Component;

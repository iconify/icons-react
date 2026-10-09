import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf7o7sb5z.css';
import '../../css/s/shn1ydbrw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gf7o7sb5z"/><path class="shn1ydbrw"/>`,
		"fallback": "energy-icons:fish-ladder-48-bold",
	});
}

export default Component;

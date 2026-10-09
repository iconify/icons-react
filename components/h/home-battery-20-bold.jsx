import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fckik_nux.css';
import '../../css/r/ryvp9vm2m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fckik_nux"/><path class="ryvp9vm2m"/>`,
		"fallback": "energy-icons:home-battery-20-bold",
	});
}

export default Component;

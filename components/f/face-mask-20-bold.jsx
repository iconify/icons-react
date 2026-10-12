import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwf-ck3ci.css';
import '../../css/k/kj6dhhbko.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwf-ck3ci"/><path class="kj6dhhbko"/>`,
		"fallback": "energy-icons:face-mask-20-bold",
	});
}

export default Component;

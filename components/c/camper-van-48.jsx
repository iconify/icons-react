import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnweauo-a.css';
import '../../css/f/ffopgc0dq.css';
import '../../css/f/f2ky81b6t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnweauo-a"/><path class="ffopgc0dq"/><path class="f2ky81b6t"/>`,
		"fallback": "energy-icons:camper-van-48",
	});
}

export default Component;

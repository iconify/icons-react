import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-q-p1bwi.css';
import '../../css/k/kqh_8ib1r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-q-p1bwi"/><path class="kqh_8ib1r"/>`,
		"fallback": "energy-icons:badge-alert-20-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1hov4txr.css';
import '../../css/o/o_hufdbvo.css';
import '../../css/u/ujk3pta6a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1hov4txr"/><path class="o_hufdbvo"/><path class="ujk3pta6a"/>`,
		"fallback": "energy-icons:eye-dropper-20-bold",
	});
}

export default Component;

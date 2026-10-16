import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdn_2wb2j.css';
import '../../css/n/nvz_g9bec.css';
import '../../css/p/pzwt5rb-f.css';
import '../../css/r/rzhih4b3g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdn_2wb2j"/><path class="nvz_g9bec"/><path class="pzwt5rb-f"/><path class="rzhih4b3g"/>`,
		"fallback": "energy-icons:grid-queue-20-bold",
	});
}

export default Component;

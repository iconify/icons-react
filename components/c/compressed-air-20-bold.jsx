import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uaytu0p-h.css';
import '../../css/x/x99a8bb3z.css';
import '../../css/x/x_e2j_srq.css';
import '../../css/u/u6_zhib1g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uaytu0p-h"/><path class="x99a8bb3z"/><path class="x_e2j_srq"/><path class="u6_zhib1g"/>`,
		"fallback": "energy-icons:compressed-air-20-bold",
	});
}

export default Component;

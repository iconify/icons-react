import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gworvlb7v.css';
import '../../css/u/udq7f4-hk.css';
import '../../css/a/a79tt-b_j.css';
import '../../css/g/gp-m6_bfl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gworvlb7v"/><path class="udq7f4-hk"/><path class="a79tt-b_j"/><path class="gp-m6_bfl"/>`,
		"fallback": "energy-icons:cottage-20-bold",
	});
}

export default Component;

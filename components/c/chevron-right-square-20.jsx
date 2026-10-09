import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxp0_ibgn.css';
import '../../css/k/k3_gmqbsv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxp0_ibgn"/><path class="k3_gmqbsv"/>`,
		"fallback": "energy-icons:chevron-right-square-20",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu5haub2l.css';
import '../../css/q/qnea9bsmy.css';
import '../../css/j/j6cyu6bqi.css';
import '../../css/p/p-qkgzbzb.css';
import '../../css/k/k_yv9qbfm.css';
import '../../css/n/nq5_p_bzp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu5haub2l"/><path class="qnea9bsmy"/><path class="j6cyu6bqi"/><path class="p-qkgzbzb"/><path class="k_yv9qbfm"/><path class="nq5_p_bzp"/>`,
		"fallback": "energy-icons:heat-pump-air-alert-20",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xibxme48y.css';
import '../../css/p/pyo64viyh.css';
import '../../css/n/nk_swmbkl.css';
import '../../css/s/szxjw4bwp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xibxme48y"/><path class="pyo64viyh"/><path class="nk_swmbkl"/><path class="szxjw4bwp"/>`,
		"fallback": "energy-icons:curtailment-20",
	});
}

export default Component;

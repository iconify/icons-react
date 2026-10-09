import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw3xaacjo.css';
import '../../css/u/uern_gkkh.css';
import '../../css/v/v1nh1rboq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw3xaacjo"/><path class="uern_gkkh"/><path class="v1nh1rboq"/>`,
		"fallback": "energy-icons:arrow-right-circle-20",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_z7uitjb.css';
import '../../css/v/v2u1wbcfd.css';
import '../../css/t/tvp2jabtf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_z7uitjb"/><path class="v2u1wbcfd"/><path class="tvp2jabtf"/>`,
		"fallback": "energy-icons:hydrogen-ship-20",
	});
}

export default Component;

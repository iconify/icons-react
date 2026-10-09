import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re49p_baz.css';
import '../../css/s/sxankrbtm.css';
import '../../css/y/ytjjt2bxd.css';
import '../../css/v/v11v651xu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re49p_baz"/><path class="sxankrbtm"/><path class="ytjjt2bxd"/><path class="v11v651xu"/>`,
		"fallback": "energy-icons:hydrogen-car-48-bold",
	});
}

export default Component;

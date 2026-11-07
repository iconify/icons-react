import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a510ge4pz.css';
import '../../css/k/k324ub9yz.css';
import '../../css/i/imtv-sn-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a510ge4pz"/><path class="k324ub9yz"/><path class="imtv-sn-l"/>`,
		"fallback": "solar:code-2-bold-duotone",
	});
}

export default Component;

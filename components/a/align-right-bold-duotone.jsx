import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_lxouqgq.css';
import '../../css/i/iodabfbsu.css';
import '../../css/e/ek5zb4bdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_lxouqgq"/><path class="iodabfbsu"/><path clip-rule="evenodd" class="ek5zb4bdq"/>`,
		"fallback": "solar:align-right-bold-duotone",
	});
}

export default Component;

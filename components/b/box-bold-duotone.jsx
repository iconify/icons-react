import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kngzmjb8s.css';
import '../../css/g/g0-11mmdk.css';
import '../../css/g/g23e_tb5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kngzmjb8s"/><path class="g0-11mmdk"/><path class="g23e_tb5w"/>`,
		"fallback": "solar:box-bold-duotone",
	});
}

export default Component;

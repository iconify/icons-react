import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zscshfblg.css';
import '../../css/f/fpavm-beg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zscshfblg"/><path class="fpavm-beg"/>`,
		"fallback": "solar:chef-hat-minimalistic-bold-duotone",
	});
}

export default Component;

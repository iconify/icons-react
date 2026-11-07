import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg928d-qd.css';
import '../../css/p/pdhevyb1i.css';
import '../../css/t/txy1lntoa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg928d-qd"/><path class="pdhevyb1i"/><path class="txy1lntoa"/>`,
		"fallback": "solar:cardholder-bold-duotone",
	});
}

export default Component;

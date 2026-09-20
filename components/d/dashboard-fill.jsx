import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbo8rvbbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbo8rvbbw"/>`,
		"fallback": "si:dashboard-fill",
	});
}

export default Component;

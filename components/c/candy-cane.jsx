import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5z_dxebm.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5z_dxebm"/>`,
		"fallback": "lineicons:candy-cane",
	});
}

export default Component;

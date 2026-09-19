import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywvby7dss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywvby7dss"/>`,
		"fallback": "hugeicons:diagonal-scroll-point-01",
	});
}

export default Component;

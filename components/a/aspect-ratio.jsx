import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4k0k2bhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="k4k0k2bhx"/>`,
		"fallback": "wordpress:aspect-ratio",
	});
}

export default Component;

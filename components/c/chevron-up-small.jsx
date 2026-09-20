import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-s0iogmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="l-s0iogmm"/>`,
		"fallback": "wordpress:chevron-up-small",
	});
}

export default Component;

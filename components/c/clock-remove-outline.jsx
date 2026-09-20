import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cexc4bw2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cexc4bw2o"/>`,
		"fallback": "mdi:clock-remove-outline",
	});
}

export default Component;

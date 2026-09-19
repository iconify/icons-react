import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf_28cc7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf_28cc7c"/>`,
		"fallback": "bxs:arrow-to-right",
	});
}

export default Component;

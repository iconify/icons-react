import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nh2o2ku1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nh2o2ku1o"/>`,
		"fallback": "solar:dollar-minimalistic-outline",
	});
}

export default Component;

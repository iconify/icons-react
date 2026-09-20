import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swgmve7ca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swgmve7ca"/>`,
		"fallback": "uit:arrow-circle-right",
	});
}

export default Component;

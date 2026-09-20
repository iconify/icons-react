import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lids929mp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lids929mp"/>`,
		"fallback": "keyline-icons:chart-bar-stacked",
	});
}

export default Component;

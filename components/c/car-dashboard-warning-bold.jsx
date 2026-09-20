import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt3335b0v.css';
import '../../css/x/x35aq7bnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt3335b0v"/><path class="x35aq7bnf"/>`,
		"fallback": "streamline-ultimate:car-dashboard-warning-bold",
	});
}

export default Component;

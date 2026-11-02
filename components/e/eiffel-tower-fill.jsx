import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as9abwbim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as9abwbim"/>`,
		"fallback": "mingcute:eiffel-tower-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk585tbgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk585tbgh"/>`,
		"fallback": "mingcute:coin-3-fill",
	});
}

export default Component;

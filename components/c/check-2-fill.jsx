import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aro6q6poa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aro6q6poa"/>`,
		"fallback": "mingcute:check-2-fill",
	});
}

export default Component;

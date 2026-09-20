import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq_3ltbpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gq_3ltbpr"/>`,
		"fallback": "keyline-icons:arrow-in-up-right-dashed-panel-sharp-fill",
	});
}

export default Component;

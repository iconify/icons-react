import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4corzddk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4corzddk"/>`,
		"fallback": "tabler:arrow-right-rhombus-filled",
	});
}

export default Component;

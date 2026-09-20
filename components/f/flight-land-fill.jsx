import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofzej5iam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofzej5iam"/>`,
		"fallback": "ri:flight-land-fill",
	});
}

export default Component;

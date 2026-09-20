import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-a9q7i-n.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-a9q7i-n"/>`,
		"fallback": "medical-icon:health-services",
	});
}

export default Component;

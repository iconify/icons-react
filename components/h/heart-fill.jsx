import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsdlbfb4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsdlbfb4o"/>`,
		"fallback": "prime:heart-fill",
	});
}

export default Component;

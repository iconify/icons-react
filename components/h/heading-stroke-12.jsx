import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltq5cfbtl.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltq5cfbtl"/>`,
		"fallback": "garden:heading-stroke-12",
	});
}

export default Component;

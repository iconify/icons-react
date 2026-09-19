import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_klh3bcp.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_klh3bcp"/>`,
		"fallback": "fa-regular:address-card",
	});
}

export default Component;

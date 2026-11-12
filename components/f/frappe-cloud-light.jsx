import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tk0l0vvyh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tk0l0vvyh"/>`,
		"fallback": "selfhst:frappe-cloud-light",
	});
}

export default Component;

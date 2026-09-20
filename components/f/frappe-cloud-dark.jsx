import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nekm4w3ue.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nekm4w3ue"/>`,
		"fallback": "selfhst:frappe-cloud-dark",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb0w0iykn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb0w0iykn"/>`,
		"fallback": "selfhst:frappe-learning-dark",
	});
}

export default Component;

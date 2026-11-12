import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/didt0l-fl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="didt0l-fl"/>`,
		"fallback": "selfhst:amazon-web-services-light",
	});
}

export default Component;

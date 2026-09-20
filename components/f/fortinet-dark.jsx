import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss9riwbor.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ss9riwbor"/>`,
		"fallback": "selfhst:fortinet-dark",
	});
}

export default Component;

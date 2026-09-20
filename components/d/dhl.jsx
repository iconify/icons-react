import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_7b64qvf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_7b64qvf"/>`,
		"fallback": "selfhst:dhl",
	});
}

export default Component;

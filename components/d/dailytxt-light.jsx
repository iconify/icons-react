import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lee2lacrz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lee2lacrz"/>`,
		"fallback": "selfhst:dailytxt-light",
	});
}

export default Component;

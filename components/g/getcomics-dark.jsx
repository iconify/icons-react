import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5zt96c_a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5zt96c_a"/>`,
		"fallback": "selfhst:getcomics-dark",
	});
}

export default Component;

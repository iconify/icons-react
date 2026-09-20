import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxg8a_oyd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxg8a_oyd"/>`,
		"fallback": "selfhst:dozzle-dark",
	});
}

export default Component;

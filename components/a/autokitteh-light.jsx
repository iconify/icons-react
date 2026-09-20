import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1622m38x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1622m38x"/>`,
		"fallback": "selfhst:autokitteh-light",
	});
}

export default Component;

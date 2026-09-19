import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4djnsbwk.css';

const viewBox = {"width":488,"height":496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4djnsbwk"/>`,
		"fallback": "zmdi:brightness-medium",
	});
}

export default Component;

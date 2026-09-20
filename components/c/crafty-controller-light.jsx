import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guz2q5bfc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guz2q5bfc"/>`,
		"fallback": "selfhst:crafty-controller-light",
	});
}

export default Component;

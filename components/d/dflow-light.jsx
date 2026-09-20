import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk9l67bma.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk9l67bma"/>`,
		"fallback": "selfhst:dflow-light",
	});
}

export default Component;

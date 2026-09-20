import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr55nnyco.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lr55nnyco"/>`,
		"fallback": "selfhst:atuin-light",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/js2nh1ber.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="js2nh1ber"/>`,
		"fallback": "selfhst:docker",
	});
}

export default Component;

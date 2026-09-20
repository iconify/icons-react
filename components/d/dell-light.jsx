import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byhqp1buj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byhqp1buj"/>`,
		"fallback": "selfhst:dell-light",
	});
}

export default Component;

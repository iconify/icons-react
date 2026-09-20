import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irw-9-bnc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irw-9-bnc"/>`,
		"fallback": "selfhst:apache-light",
	});
}

export default Component;

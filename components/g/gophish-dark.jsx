import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qf179ubva.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qf179ubva"/>`,
		"fallback": "selfhst:gophish-dark",
	});
}

export default Component;

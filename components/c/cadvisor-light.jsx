import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sq7p2zb5p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sq7p2zb5p"/>`,
		"fallback": "selfhst:cadvisor-light",
	});
}

export default Component;

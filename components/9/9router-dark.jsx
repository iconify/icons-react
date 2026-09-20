import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpn7p930p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpn7p930p"/>`,
		"fallback": "selfhst:9router-dark",
	});
}

export default Component;

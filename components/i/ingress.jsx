import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iu898pi9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iu898pi9p"/>`,
		"fallback": "eos-icons:ingress",
	});
}

export default Component;

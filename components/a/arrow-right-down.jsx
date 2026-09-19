import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmbmvfb2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmbmvfb2p"/>`,
		"fallback": "mono-icons:arrow-right-down",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kj91_xmgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kj91_xmgc"/>`,
		"fallback": "griddy-icons:data-cloud-check-filled",
	});
}

export default Component;

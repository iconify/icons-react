import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qae_v0bid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qae_v0bid"/>`,
		"fallback": "tabler:hanger-off",
	});
}

export default Component;

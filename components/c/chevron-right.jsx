import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mw1_3bc7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mw1_3bc7f"/>`,
		"fallback": "matita:chevron-right",
	});
}

export default Component;

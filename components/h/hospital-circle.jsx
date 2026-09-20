import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc73tub-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wc73tub-n"/>`,
		"fallback": "tabler:hospital-circle",
	});
}

export default Component;

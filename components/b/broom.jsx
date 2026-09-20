import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzx2p7ngo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzx2p7ngo"/>`,
		"fallback": "proicons:broom",
	});
}

export default Component;

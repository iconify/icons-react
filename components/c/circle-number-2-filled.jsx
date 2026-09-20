import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/noh0r_b9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="noh0r_b9d"/>`,
		"fallback": "tabler:circle-number-2-filled",
	});
}

export default Component;

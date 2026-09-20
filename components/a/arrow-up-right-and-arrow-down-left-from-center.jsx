import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp_4n9bbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kp_4n9bbh"/>`,
		"fallback": "prime:arrow-up-right-and-arrow-down-left-from-center",
	});
}

export default Component;

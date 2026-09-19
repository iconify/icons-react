import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5w2sby7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5w2sby7o"/>`,
		"fallback": "boxicons:arrow-down-filled",
	});
}

export default Component;

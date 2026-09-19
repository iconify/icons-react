import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tm9_03bcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tm9_03bcg"/>`,
		"fallback": "mono-icons:calendar",
	});
}

export default Component;

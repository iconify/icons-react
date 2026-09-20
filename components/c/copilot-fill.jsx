import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwxmvn-7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwxmvn-7o"/>`,
		"fallback": "ri:copilot-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfqyd7-2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfqyd7-2t"/>`,
		"fallback": "iconoir:handbag",
	});
}

export default Component;

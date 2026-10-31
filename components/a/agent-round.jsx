import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvzivcb1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvzivcb1m"/>`,
		"fallback": "coolicons:agent-round",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iabj60bzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iabj60bzy"/>`,
		"fallback": "streamline-ultimate:escalator-descend-bold",
	});
}

export default Component;

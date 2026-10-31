import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg1h1q77m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qg1h1q77m"/>`,
		"fallback": "coolicons:command-bulk-round",
	});
}

export default Component;

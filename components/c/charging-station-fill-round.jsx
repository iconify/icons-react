import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm8n1dbeu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm8n1dbeu"/>`,
		"fallback": "coolicons:charging-station-fill-round",
	});
}

export default Component;

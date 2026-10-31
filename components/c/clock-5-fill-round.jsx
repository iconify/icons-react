import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azmgfgb8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azmgfgb8s"/>`,
		"fallback": "coolicons:clock-5-fill-round",
	});
}

export default Component;

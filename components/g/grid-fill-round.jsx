import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnri7s2ba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnri7s2ba"/>`,
		"fallback": "coolicons:grid-fill-round",
	});
}

export default Component;

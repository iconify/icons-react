import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc3trkb8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vc3trkb8n"/>`,
		"fallback": "cbi:batman",
	});
}

export default Component;

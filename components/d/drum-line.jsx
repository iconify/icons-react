import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdn7-dr4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdn7-dr4s"/>`,
		"fallback": "mingcute:drum-line",
	});
}

export default Component;

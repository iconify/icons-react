import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j51q_13wg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j51q_13wg"/>`,
		"fallback": "coolicons:alarm-off-round",
	});
}

export default Component;

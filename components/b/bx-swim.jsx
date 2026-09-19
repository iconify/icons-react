import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_9wi13wp.css';
import '../../css/j/jinb2jzjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="l_9wi13wp"/><path class="jinb2jzjf"/>`,
		"fallback": "bx:bx-swim",
	});
}

export default Component;

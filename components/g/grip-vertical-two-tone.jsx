import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em3tw8a-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="em3tw8a-m"/>`,
		"fallback": "keyline-icons:grip-vertical-two-tone",
	});
}

export default Component;

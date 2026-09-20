import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eigbs-bly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eigbs-bly"/>`,
		"fallback": "streamline-sharp:flash-timer-remix",
	});
}

export default Component;

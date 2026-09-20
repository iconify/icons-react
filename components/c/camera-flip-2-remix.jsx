import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyhhs_6ch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qyhhs_6ch"/>`,
		"fallback": "streamline-sharp:camera-flip-2-remix",
	});
}

export default Component;

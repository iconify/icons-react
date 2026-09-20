import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lowqi3bit.css';
import '../../css/n/nm733ibre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lowqi3bit"/><path class="nm733ibre"/>`,
		"fallback": "streamline-freehand:business-coaching-whistle",
	});
}

export default Component;

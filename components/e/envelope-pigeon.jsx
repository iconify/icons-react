import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohbffsb_w.css';
import '../../css/t/tj55anbgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohbffsb_w"/><path class="tj55anbgb"/>`,
		"fallback": "streamline-freehand:envelope-pigeon",
	});
}

export default Component;

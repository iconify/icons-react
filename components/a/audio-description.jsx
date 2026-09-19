import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tygts_5js.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tygts_5js"/>`,
		"fallback": "guidance:audio-description",
	});
}

export default Component;

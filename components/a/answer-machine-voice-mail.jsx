import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4ae56hxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t4ae56hxx"/>`,
		"fallback": "streamline-freehand-color:answer-machine-voice-mail",
	});
}

export default Component;

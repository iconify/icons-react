import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amjsd8bcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="amjsd8bcd"/>`,
		"fallback": "griddy-icons:analyze-voice-filled",
	});
}

export default Component;

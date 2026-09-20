import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ah0tzibwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ah0tzibwk"/>`,
		"fallback": "simple-icons:elevenlabs",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tcy-4kbqq.css';
import '../../css/a/avj5mcgkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tcy-4kbqq"/><path class="avj5mcgkt"/></g>`,
		"fallback": "keyline-icons:hourglass-two-tone",
	});
}

export default Component;

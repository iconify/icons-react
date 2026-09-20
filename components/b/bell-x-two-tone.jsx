import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yp6w4xkla.css';
import '../../css/j/jq00-k51r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yp6w4xkla"/><path class="jq00-k51r"/></g>`,
		"fallback": "keyline-icons:bell-x-two-tone",
	});
}

export default Component;

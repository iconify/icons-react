import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm803h7vv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm803h7vv"/>`,
		"fallback": "keyline-icons:camera-off-sharp",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc59-q_ro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc59-q_ro"/>`,
		"fallback": "lets-icons:expand-top-stop-light",
	});
}

export default Component;

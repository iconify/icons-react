import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3yp2ac-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3yp2ac-w"/>`,
		"fallback": "lucide:circle-fading-arrow-up",
	});
}

export default Component;

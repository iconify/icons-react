import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc4yxhbiq.css';

const viewBox = {"width":819,"height":638};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vc4yxhbiq"/>`,
		"fallback": "ls:group",
	});
}

export default Component;

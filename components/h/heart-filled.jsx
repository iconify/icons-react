import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqi0jcbor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqi0jcbor"/>`,
		"fallback": "reicon:heart-filled",
	});
}

export default Component;

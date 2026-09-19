import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9lfmybtd.css';
import '../../css/g/g6owz749s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9lfmybtd"/><path class="g6owz749s"/>`,
		"fallback": "bx:checkbox-square",
	});
}

export default Component;

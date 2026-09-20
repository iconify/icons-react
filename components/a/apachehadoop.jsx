import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qycoj8bro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qycoj8bro"/>`,
		"fallback": "simple-icons:apachehadoop",
	});
}

export default Component;

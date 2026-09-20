import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhmyeh8ug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhmyeh8ug"/>`,
		"fallback": "simple-icons:beatsbydre",
	});
}

export default Component;

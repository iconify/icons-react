import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjk8aukoy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjk8aukoy"/>`,
		"fallback": "ri:file-4-fill",
	});
}

export default Component;

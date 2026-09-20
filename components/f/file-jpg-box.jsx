import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8w427q9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8w427q9f"/>`,
		"fallback": "mdi:file-jpg-box",
	});
}

export default Component;

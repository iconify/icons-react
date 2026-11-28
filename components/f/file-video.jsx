import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dp6q3mb9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dp6q3mb9b"/>`,
		"fallback": "noviair:file-video",
	});
}

export default Component;

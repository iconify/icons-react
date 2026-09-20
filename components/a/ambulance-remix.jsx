import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7inog-tz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y7inog-tz"/>`,
		"fallback": "streamline:ambulance-remix",
	});
}

export default Component;

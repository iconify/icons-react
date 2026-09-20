import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyvkscb8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyvkscb8a"/>`,
		"fallback": "streamline-sharp-color:arrow-cursor-1-flat",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkg7nmbar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkg7nmbar"/>`,
		"fallback": "mdi:alphabet-c",
	});
}

export default Component;

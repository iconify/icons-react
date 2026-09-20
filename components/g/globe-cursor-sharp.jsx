import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izfzfxb0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izfzfxb0v"/>`,
		"fallback": "keyline-icons:globe-cursor-sharp",
	});
}

export default Component;

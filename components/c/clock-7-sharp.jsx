import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgqmgcdgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgqmgcdgh"/>`,
		"fallback": "keyline-icons:clock-7-sharp",
	});
}

export default Component;

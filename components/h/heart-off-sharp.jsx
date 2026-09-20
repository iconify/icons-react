import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy3vt9bos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oy3vt9bos"/>`,
		"fallback": "keyline-icons:heart-off-sharp",
	});
}

export default Component;

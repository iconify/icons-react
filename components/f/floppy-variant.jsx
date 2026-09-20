import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zna8a2b9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zna8a2b9n"/>`,
		"fallback": "mdi:floppy-variant",
	});
}

export default Component;

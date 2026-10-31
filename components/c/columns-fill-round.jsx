import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe5303d4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oe5303d4d"/>`,
		"fallback": "coolicons:columns-fill-round",
	});
}

export default Component;

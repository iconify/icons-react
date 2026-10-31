import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocxk99brw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocxk99brw"/>`,
		"fallback": "withicons:disc-gloss",
	});
}

export default Component;

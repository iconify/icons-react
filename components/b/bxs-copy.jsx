import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw0dv0bke.css';
import '../../css/w/wq2m00b2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw0dv0bke"/><path class="wq2m00b2g"/>`,
		"fallback": "bx:bxs-copy",
	});
}

export default Component;

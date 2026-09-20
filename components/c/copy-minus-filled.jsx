import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1soskbig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1soskbig"/>`,
		"fallback": "tabler:copy-minus-filled",
	});
}

export default Component;

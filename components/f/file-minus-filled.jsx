import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt6of_i9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rt6of_i9p"/>`,
		"fallback": "boxicons:file-minus-filled",
	});
}

export default Component;

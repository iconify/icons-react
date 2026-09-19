import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd93zo4hw.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sd93zo4hw"/>`,
		"fallback": "foundation:graph-horizontal",
	});
}

export default Component;

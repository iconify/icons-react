import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-9asxfcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-9asxfcj"/>`,
		"fallback": "withicons:grip-horizontal-gloss",
	});
}

export default Component;

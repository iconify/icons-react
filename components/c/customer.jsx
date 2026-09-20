import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi4ezce8m.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vi4ezce8m"/>`,
		"fallback": "lineicons:customer",
	});
}

export default Component;

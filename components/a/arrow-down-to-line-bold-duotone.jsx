import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omll7putu.css';
import '../../css/b/bidhrk63b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omll7putu"/><path class="bidhrk63b"/>`,
		"fallback": "solar:arrow-down-to-line-bold-duotone",
	});
}

export default Component;

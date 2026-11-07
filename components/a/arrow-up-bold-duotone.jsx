import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyjanl8xm.css';
import '../../css/l/l-7l4bc0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xyjanl8xm"/><path class="l-7l4bc0a"/>`,
		"fallback": "solar:arrow-up-bold-duotone",
	});
}

export default Component;

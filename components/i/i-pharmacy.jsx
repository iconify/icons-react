import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdatwkffh.css';
import '../../css/u/ux686dk8x.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdatwkffh"/><path class="ux686dk8x"/>`,
		"fallback": "medical-icon:i-pharmacy",
	});
}

export default Component;

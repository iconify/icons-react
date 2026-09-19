import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh2hcmbxn.css';

const viewBox = {"width":368,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh2hcmbxn"/>`,
		"fallback": "zmdi:flash-off",
	});
}

export default Component;

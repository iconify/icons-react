import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqfaxx8mn.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqfaxx8mn"/>`,
		"fallback": "medical-icon:i-mental-health",
	});
}

export default Component;

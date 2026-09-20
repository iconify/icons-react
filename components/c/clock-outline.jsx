import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iq-t9ytaf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iq-t9ytaf"/>`,
		"fallback": "teenyicons:clock-outline",
	});
}

export default Component;

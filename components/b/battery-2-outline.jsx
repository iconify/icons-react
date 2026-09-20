import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkmy9uvwt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkmy9uvwt"/>`,
		"fallback": "teenyicons:battery-2-outline",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uswx_e-5h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uswx_e-5h"/>`,
		"fallback": "pinhead:6",
	});
}

export default Component;

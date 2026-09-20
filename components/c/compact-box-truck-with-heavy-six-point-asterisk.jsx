import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0lclmplr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0lclmplr"/>`,
		"fallback": "pinhead:compact-box-truck-with-heavy-six-point-asterisk",
	});
}

export default Component;

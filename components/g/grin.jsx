import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dva4gabsp.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dva4gabsp"/>`,
		"fallback": "fa-solid:grin",
	});
}

export default Component;

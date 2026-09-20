import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdra5xb-i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdra5xb-i"/>`,
		"fallback": "ix:eye",
	});
}

export default Component;

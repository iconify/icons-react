import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcmfr-b4o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcmfr-b4o"/>`,
		"fallback": "ion:arrow-return-right",
	});
}

export default Component;

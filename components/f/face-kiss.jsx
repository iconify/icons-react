import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evq328bou.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evq328bou"/>`,
		"fallback": "fa6-solid:face-kiss",
	});
}

export default Component;

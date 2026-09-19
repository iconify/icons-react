import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_9dkpbmu.css';
import '../../css/o/o3b3gk40z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_9dkpbmu"/><path class="o3b3gk40z"/>`,
		"fallback": "famicons:alarm-sharp",
	});
}

export default Component;

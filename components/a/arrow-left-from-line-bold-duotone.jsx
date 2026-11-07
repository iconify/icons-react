import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqfv9_bht.css';
import '../../css/g/g2z0o6bph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqfv9_bht"/><path class="g2z0o6bph"/>`,
		"fallback": "solar:arrow-left-from-line-bold-duotone",
	});
}

export default Component;

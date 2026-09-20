import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2k0_cbib.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2k0_cbib"/>`,
		"fallback": "pinhead:arrow-down-from-rectangle-outline",
	});
}

export default Component;

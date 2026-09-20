import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob2n04b5m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob2n04b5m"/>`,
		"fallback": "radix-icons:globe",
	});
}

export default Component;

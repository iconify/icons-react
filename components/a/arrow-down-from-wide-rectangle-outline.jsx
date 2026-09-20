import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxnfo63mc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxnfo63mc"/>`,
		"fallback": "pinhead:arrow-down-from-wide-rectangle-outline",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9hpp2nbu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9hpp2nbu"/>`,
		"fallback": "pinhead:canoe-on-pickup-truck",
	});
}

export default Component;

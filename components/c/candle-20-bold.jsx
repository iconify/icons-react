import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uoazbdbsd.css';
import '../../css/r/rzmdligbf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uoazbdbsd"/><path class="rzmdligbf"/>`,
		"fallback": "energy-icons:candle-20-bold",
	});
}

export default Component;

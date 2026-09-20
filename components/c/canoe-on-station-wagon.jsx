import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k203-ju_h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k203-ju_h"/>`,
		"fallback": "pinhead:canoe-on-station-wagon",
	});
}

export default Component;

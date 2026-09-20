import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9mpb1lqs.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9mpb1lqs"/>`,
		"fallback": "pinhead:fish-and-hook-under-ice",
	});
}

export default Component;

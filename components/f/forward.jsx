import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llc80zbyz.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llc80zbyz"/>`,
		"fallback": "el:forward",
	});
}

export default Component;

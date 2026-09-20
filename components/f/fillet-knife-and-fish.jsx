import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj597ubui.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj597ubui"/>`,
		"fallback": "pinhead:fillet-knife-and-fish",
	});
}

export default Component;

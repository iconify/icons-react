import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8f5z6b1c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8f5z6b1c"/>`,
		"fallback": "carbon:floorplan",
	});
}

export default Component;

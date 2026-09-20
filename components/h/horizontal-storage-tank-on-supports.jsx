import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f38hztbpz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f38hztbpz"/>`,
		"fallback": "pinhead:horizontal-storage-tank-on-supports",
	});
}

export default Component;

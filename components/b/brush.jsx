import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0opfxbxu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0opfxbxu"/>`,
		"fallback": "raphael:brush",
	});
}

export default Component;

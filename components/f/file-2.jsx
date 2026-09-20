import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6cu__b8w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6cu__b8w"/>`,
		"fallback": "subway:file-2",
	});
}

export default Component;

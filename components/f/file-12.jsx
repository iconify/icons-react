import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmj32gb0p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmj32gb0p"/>`,
		"fallback": "subway:file-12",
	});
}

export default Component;

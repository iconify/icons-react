import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j68dxzg3p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j68dxzg3p"/>`,
		"fallback": "subway:file-10",
	});
}

export default Component;

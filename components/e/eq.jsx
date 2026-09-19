import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3q2u3bwg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3q2u3bwg"/>`,
		"fallback": "file-icons:eq",
	});
}

export default Component;

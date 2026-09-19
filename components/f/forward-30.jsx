import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b__ieh4fk.css';

const viewBox = {"width":344,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b__ieh4fk"/>`,
		"fallback": "zmdi:forward-30",
	});
}

export default Component;

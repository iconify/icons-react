import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3h22hb9n.css';

const viewBox = {"width":384,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3h22hb9n"/>`,
		"fallback": "zmdi:headset",
	});
}

export default Component;

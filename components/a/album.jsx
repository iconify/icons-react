import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcfl7vsrc.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcfl7vsrc"/>`,
		"fallback": "zmdi:album",
	});
}

export default Component;

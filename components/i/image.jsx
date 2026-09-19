import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7o_u2bfm.css';

const viewBox = {"width":439,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7o_u2bfm"/>`,
		"fallback": "file-icons:image",
	});
}

export default Component;

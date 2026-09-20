import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0aye_mhf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0aye_mhf"/>`,
		"fallback": "selfhst:chili3d-light",
	});
}

export default Component;

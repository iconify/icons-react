import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg0_fpbvv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg0_fpbvv"/>`,
		"fallback": "selfhst:ackify-light",
	});
}

export default Component;

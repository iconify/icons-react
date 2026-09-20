import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkrxvcc8q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkrxvcc8q"/>`,
		"fallback": "selfhst:google-analytics-light",
	});
}

export default Component;

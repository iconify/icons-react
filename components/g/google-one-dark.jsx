import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7c9s3b1d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7c9s3b1d"/>`,
		"fallback": "selfhst:google-one-dark",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpw_gduhr.css';
import '../../css/m/m-hjm3bkb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpw_gduhr"/><path class="m-hjm3bkb"/>`,
		"fallback": "selfhst:amazon-s3-dark",
	});
}

export default Component;

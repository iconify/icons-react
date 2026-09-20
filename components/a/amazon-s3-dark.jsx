import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5j_i5b7x.css';
import '../../css/m/m-hjm3bkb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5j_i5b7x"/><path class="m-hjm3bkb"/>`,
		"fallback": "selfhst:amazon-s3-dark",
	});
}

export default Component;

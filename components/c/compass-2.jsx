import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckf3fdcmk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckf3fdcmk"/>`,
		"fallback": "subway:compass-2",
	});
}

export default Component;

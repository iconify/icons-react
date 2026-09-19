import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z07rjrbqz.css';
import '../../css/v/v5_5mr8sa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z07rjrbqz"/><path class="v5_5mr8sa"/>`,
		"fallback": "ion:document-text-outline",
	});
}

export default Component;

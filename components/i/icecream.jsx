import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv_0qibyt.css';
import '../../css/y/yi-zn1bbs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vv_0qibyt"/><path class="yi-zn1bbs"/>`,
		"fallback": "ion:icecream",
	});
}

export default Component;

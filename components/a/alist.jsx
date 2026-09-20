import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kh8cc2nme.css';
import '../../css/z/z6m2ovbsr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kh8cc2nme"/><path class="z6m2ovbsr"/>`,
		"fallback": "selfhst:alist",
	});
}

export default Component;

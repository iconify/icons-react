import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfbu4nbcu.css';
import '../../css/z/z6m2ovbsr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfbu4nbcu"/><path class="z6m2ovbsr"/>`,
		"fallback": "selfhst:alist",
	});
}

export default Component;

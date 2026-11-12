import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa-vdingl.css';
import '../../css/s/sr532hb3v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa-vdingl"/><path class="sr532hb3v"/>`,
		"fallback": "selfhst:crt-sh",
	});
}

export default Component;

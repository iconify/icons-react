import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9kihqb-w.css';
import '../../css/y/y37rc1b4k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9kihqb-w"/><path class="y37rc1b4k"/>`,
		"fallback": "selfhst:bitcoin",
	});
}

export default Component;

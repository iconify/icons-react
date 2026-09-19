import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfw5puwlc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfw5puwlc"/>`,
		"fallback": "fa6-solid:bowl-rice",
	});
}

export default Component;

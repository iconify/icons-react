import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvzy6fb4j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvzy6fb4j"/>`,
		"fallback": "fa6-solid:comment-medical",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq8gncb1j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mq8gncb1j"/>`,
		"fallback": "selfhst:gl-inet",
	});
}

export default Component;

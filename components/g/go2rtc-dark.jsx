import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cehpctv3j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cehpctv3j"/>`,
		"fallback": "selfhst:go2rtc-dark",
	});
}

export default Component;

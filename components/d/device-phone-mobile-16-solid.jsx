import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr_jcmkbu.css';
import '../../css/k/k589qfbqh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qr_jcmkbu"/><path clip-rule="evenodd" class="k589qfbqh"/>`,
		"fallback": "heroicons:device-phone-mobile-16-solid",
	});
}

export default Component;

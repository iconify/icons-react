import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apgajm5hs.css';

const viewBox = {"width":512,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apgajm5hs"/>`,
		"fallback": "zmdi:account-box-mail",
	});
}

export default Component;

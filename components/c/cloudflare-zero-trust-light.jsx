import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlfva0b0l.css';
import '../../css/o/oouf8iqje.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlfva0b0l"/><path class="oouf8iqje"/>`,
		"fallback": "selfhst:cloudflare-zero-trust-light",
	});
}

export default Component;

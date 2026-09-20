import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/surq_x5uw.css';
import '../../css/z/z0cv2cc8s.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="surq_x5uw"/><path class="z0cv2cc8s"/>`,
		"fallback": "medical-icon:i-administration",
	});
}

export default Component;

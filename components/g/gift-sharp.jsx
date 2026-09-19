import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4lrn5gzp.css';
import '../../css/s/skk-_uu3u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4lrn5gzp"/><path class="skk-_uu3u"/>`,
		"fallback": "ion:gift-sharp",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kc7ztv3im.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kc7ztv3im"/>`,
		"fallback": "lineicons:behance-original",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxdnc-4me.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxdnc-4me"/>`,
		"fallback": "coolicons:image-fill-round",
	});
}

export default Component;

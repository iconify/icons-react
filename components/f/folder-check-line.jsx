import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad2r3cjik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ad2r3cjik"/>`,
		"fallback": "majesticons:folder-check-line",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prjcfdk2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prjcfdk2r"/>`,
		"fallback": "hugeicons:credit-card-not-found",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e29ch1r5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e29ch1r5j"/>`,
		"fallback": "bxs:cloud-download",
	});
}

export default Component;

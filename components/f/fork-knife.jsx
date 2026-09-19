import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smi9hnbgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smi9hnbgk"/>`,
		"fallback": "boxicons:fork-knife",
	});
}

export default Component;

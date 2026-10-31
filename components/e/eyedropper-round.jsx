import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yizhzcf5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yizhzcf5j"/>`,
		"fallback": "coolicons:eyedropper-round",
	});
}

export default Component;

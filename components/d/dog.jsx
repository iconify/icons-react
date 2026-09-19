import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crq6d2swy.css';
import '../../css/z/z0_ytrr1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crq6d2swy"/><path class="z0_ytrr1q"/>`,
		"fallback": "bxs:dog",
	});
}

export default Component;

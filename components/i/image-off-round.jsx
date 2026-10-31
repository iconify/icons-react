import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm2s2x7kz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm2s2x7kz"/>`,
		"fallback": "coolicons:image-off-round",
	});
}

export default Component;

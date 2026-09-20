import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-y74lb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-y74lb5j"/>`,
		"fallback": "typcn:chart-area-outline",
	});
}

export default Component;

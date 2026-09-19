import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2pd2dxzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2pd2dxzg"/>`,
		"fallback": "hugeicons:curling",
	});
}

export default Component;

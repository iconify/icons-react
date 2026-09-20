import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bngtq2bvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bngtq2bvg"/>`,
		"fallback": "token:edge",
	});
}

export default Component;

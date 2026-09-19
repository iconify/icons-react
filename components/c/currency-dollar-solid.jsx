import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yo6mhsyca.css';
import '../../css/p/pw7zombkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yo6mhsyca"/><path clip-rule="evenodd" class="pw7zombkv"/></g>`,
		"fallback": "heroicons:currency-dollar-solid",
	});
}

export default Component;

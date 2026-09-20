import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx1jwkbdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zx1jwkbdc"/>`,
		"fallback": "streamline-sharp:box-waterproof-solid",
	});
}

export default Component;

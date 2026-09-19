import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z38kx1b1d.css';
import '../../css/e/ew4cdbbdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z38kx1b1d"/><path clip-rule="evenodd" class="ew4cdbbdn"/>`,
		"fallback": "cuida:arrow-left-outline",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtwzzdbkp.css';
import '../../css/r/rri86bcuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtwzzdbkp"/><path class="rri86bcuc"/>`,
		"fallback": "pixel:cart-minus",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw9-n0btc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vw9-n0btc"/>`,
		"fallback": "pinhead:car-with-taxi-checkerboard",
	});
}

export default Component;

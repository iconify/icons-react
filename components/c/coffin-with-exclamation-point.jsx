import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_blhsbzq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_blhsbzq"/>`,
		"fallback": "pinhead:coffin-with-exclamation-point",
	});
}

export default Component;

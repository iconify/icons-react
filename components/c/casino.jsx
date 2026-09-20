import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe8xt8c8f.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe8xt8c8f"/>`,
		"fallback": "map:casino",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si3wqrb0z.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si3wqrb0z"/>`,
		"fallback": "map:gym",
	});
}

export default Component;

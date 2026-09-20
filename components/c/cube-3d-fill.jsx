import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djhyracdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djhyracdg"/>`,
		"fallback": "mingcute:cube-3d-fill",
	});
}

export default Component;

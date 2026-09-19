import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqx9-3d1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqx9-3d1d"/>`,
		"fallback": "iconamoon:frame-bold",
	});
}

export default Component;

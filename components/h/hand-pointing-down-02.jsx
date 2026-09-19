import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxf4d6pbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxf4d6pbj"/>`,
		"fallback": "hugeicons:hand-pointing-down-02",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppbz2dbgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppbz2dbgx"/>`,
		"fallback": "noviair:cap",
	});
}

export default Component;

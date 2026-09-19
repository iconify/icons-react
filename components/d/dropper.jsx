import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zeo1qepyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zeo1qepyh"/>`,
		"fallback": "hugeicons:dropper",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycgy5nb8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycgy5nb8q"/>`,
		"fallback": "heroicons:arrows-pointing-in",
	});
}

export default Component;

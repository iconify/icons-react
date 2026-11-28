import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-by9wblf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-by9wblf"/>`,
		"fallback": "noviair:cube-x",
	});
}

export default Component;

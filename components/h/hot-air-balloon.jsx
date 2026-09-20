import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5hb59dkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5hb59dkr"/>`,
		"fallback": "streamline-sharp:hot-air-balloon",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0st4ubeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s0st4ubeq"/>`,
		"fallback": "streamline-sharp:bag-dollar-remix",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccoa8rb7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ccoa8rb7w"/>`,
		"fallback": "streamline-sharp:horizontal-slider-2-remix",
	});
}

export default Component;

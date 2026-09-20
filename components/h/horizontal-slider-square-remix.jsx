import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9w5zbb6p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n9w5zbb6p"/>`,
		"fallback": "streamline-plump:horizontal-slider-square-remix",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmb1as-8x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmb1as-8x"/>`,
		"fallback": "roentgen:cactus",
	});
}

export default Component;

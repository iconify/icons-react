import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttzqr1_gg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttzqr1_gg"/>`,
		"fallback": "roentgen:chain-barrier",
	});
}

export default Component;

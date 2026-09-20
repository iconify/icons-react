import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th6wg-bkx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="th6wg-bkx"/>`,
		"fallback": "roentgen:cctv-dome-wall",
	});
}

export default Component;

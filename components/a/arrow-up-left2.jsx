import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uoc1v7b7b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uoc1v7b7b"/>`,
		"fallback": "icomoon-free:arrow-up-left2",
	});
}

export default Component;

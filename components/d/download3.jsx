import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhgfm9vyl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhgfm9vyl"/>`,
		"fallback": "icomoon-free:download3",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7-9zpbwi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7-9zpbwi"/>`,
		"fallback": "icomoon-free:box-remove",
	});
}

export default Component;

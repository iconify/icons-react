import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cedh__b6b.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cedh__b6b"/>`,
		"fallback": "garden:face-neutral-fill-12",
	});
}

export default Component;

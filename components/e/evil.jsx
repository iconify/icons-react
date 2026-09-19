import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0drj3h3h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0drj3h3h"/>`,
		"fallback": "icomoon-free:evil",
	});
}

export default Component;

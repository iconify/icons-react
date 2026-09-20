import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0sruib_n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0sruib_n"/>`,
		"fallback": "qlementine-icons:cross-filled-16",
	});
}

export default Component;

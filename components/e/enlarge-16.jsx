import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnaxz9b-k.css';
import '../../css/w/w8nbmm6vs.css';
import '../../css/d/dne5xxbvu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnaxz9b-k"/><path class="w8nbmm6vs"/><path class="dne5xxbvu"/>`,
		"fallback": "qlementine-icons:enlarge-16",
	});
}

export default Component;

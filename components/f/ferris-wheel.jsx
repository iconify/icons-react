import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lo_j92bas.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lo_j92bas"/>`,
		"fallback": "dinkie-icons:ferris-wheel",
	});
}

export default Component;

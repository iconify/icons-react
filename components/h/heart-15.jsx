import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwqiw3okt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwqiw3okt"/>`,
		"fallback": "maki:heart-15",
	});
}

export default Component;

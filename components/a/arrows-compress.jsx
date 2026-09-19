import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bloqio82m.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bloqio82m"/>`,
		"fallback": "foundation:arrows-compress",
	});
}

export default Component;

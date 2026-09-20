import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9i7bobei.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9i7bobei"/>`,
		"fallback": "maki:garden-11",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqehrtric.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqehrtric"/>`,
		"fallback": "fa7-solid:arrows-to-circle",
	});
}

export default Component;

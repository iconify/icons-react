import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prgsuk5uv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prgsuk5uv"/>`,
		"fallback": "at-icons:expand",
	});
}

export default Component;

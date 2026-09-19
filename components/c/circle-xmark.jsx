import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1yx-1y0m.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1yx-1y0m"/>`,
		"fallback": "fa7-regular:circle-xmark",
	});
}

export default Component;

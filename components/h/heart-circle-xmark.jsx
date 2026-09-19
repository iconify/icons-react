import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkj786brn.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkj786brn"/>`,
		"fallback": "fa7-solid:heart-circle-xmark",
	});
}

export default Component;

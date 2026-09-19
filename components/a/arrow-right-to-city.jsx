import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdmi7-6-j.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdmi7-6-j"/>`,
		"fallback": "fa7-solid:arrow-right-to-city",
	});
}

export default Component;

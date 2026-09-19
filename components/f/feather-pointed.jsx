import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x229jknre.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x229jknre"/>`,
		"fallback": "fa7-solid:feather-pointed",
	});
}

export default Component;

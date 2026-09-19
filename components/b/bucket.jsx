import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgl2qg0kn.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgl2qg0kn"/>`,
		"fallback": "fa7-solid:bucket",
	});
}

export default Component;

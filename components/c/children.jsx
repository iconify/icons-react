import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/capp2ob6l.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="capp2ob6l"/>`,
		"fallback": "fa6-solid:children",
	});
}

export default Component;

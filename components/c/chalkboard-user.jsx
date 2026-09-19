import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akho15b0a.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akho15b0a"/>`,
		"fallback": "fa6-solid:chalkboard-user",
	});
}

export default Component;

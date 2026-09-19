import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b19ec7c9y.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b19ec7c9y"/>`,
		"fallback": "fa-solid:bell-slash",
	});
}

export default Component;

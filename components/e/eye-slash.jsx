import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pymhskbdo.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pymhskbdo"/>`,
		"fallback": "fa6-solid:eye-slash",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfdat4jsn.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfdat4jsn"/>`,
		"fallback": "fa-solid:cloud-sun",
	});
}

export default Component;

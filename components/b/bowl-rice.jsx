import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo1wx0kvs.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oo1wx0kvs"/>`,
		"fallback": "fa7-solid:bowl-rice",
	});
}

export default Component;

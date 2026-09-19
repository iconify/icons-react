import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq0-i1bnk.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq0-i1bnk"/>`,
		"fallback": "fa7-solid:hands-wash",
	});
}

export default Component;

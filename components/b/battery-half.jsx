import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdnuqry3j.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdnuqry3j"/>`,
		"fallback": "fa7-solid:battery-half",
	});
}

export default Component;

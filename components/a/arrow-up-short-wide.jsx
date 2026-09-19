import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpewheg8x.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpewheg8x"/>`,
		"fallback": "fa7-solid:arrow-up-short-wide",
	});
}

export default Component;

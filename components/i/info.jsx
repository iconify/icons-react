import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt9-lrb1j.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt9-lrb1j"/>`,
		"fallback": "fa7-solid:info",
	});
}

export default Component;

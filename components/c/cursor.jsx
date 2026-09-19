import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-q-q20kk.css';

const viewBox = {"width":642,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-q-q20kk"/>`,
		"fallback": "whh:cursor",
	});
}

export default Component;

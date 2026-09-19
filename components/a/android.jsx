import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f494_fepc.css';

const viewBox = {"width":1408,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f494_fepc"/>`,
		"fallback": "fa:android",
	});
}

export default Component;

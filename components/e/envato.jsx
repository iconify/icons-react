import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtfp4lbkt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtfp4lbkt"/>`,
		"fallback": "cib:envato",
	});
}

export default Component;

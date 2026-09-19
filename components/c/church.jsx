import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnrx27ndk.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnrx27ndk"/>`,
		"fallback": "fa-solid:church",
	});
}

export default Component;

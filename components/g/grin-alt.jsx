import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4v37gz8j.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4v37gz8j"/>`,
		"fallback": "fa-solid:grin-alt",
	});
}

export default Component;

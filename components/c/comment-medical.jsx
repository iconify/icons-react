import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2be4teex.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2be4teex"/>`,
		"fallback": "fa-solid:comment-medical",
	});
}

export default Component;

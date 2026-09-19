import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpdlfs5oy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpdlfs5oy"/>`,
		"fallback": "fa6-regular:comment-dots",
	});
}

export default Component;

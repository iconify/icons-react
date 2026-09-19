import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssv2w4v0d.css';

const viewBox = {"width":750,"height":850};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssv2w4v0d"/>`,
		"fallback": "il:conversation",
	});
}

export default Component;

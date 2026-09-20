import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np2o43-0j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np2o43-0j"/>`,
		"fallback": "subway:download-2",
	});
}

export default Component;

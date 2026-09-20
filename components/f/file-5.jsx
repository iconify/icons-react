import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ks1yeixst.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ks1yeixst"/>`,
		"fallback": "subway:file-5",
	});
}

export default Component;

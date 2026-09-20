import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_h9pdmlz.css';
import '../../css/n/nx_nl5ydl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_h9pdmlz"/><path clip-rule="evenodd" class="nx_nl5ydl"/>`,
		"fallback": "si:globe-detailed-fill",
	});
}

export default Component;

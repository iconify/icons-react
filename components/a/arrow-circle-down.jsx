import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcddw3bvx.css';
import '../../css/i/i3a4j3hes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcddw3bvx"/><path class="i3a4j3hes"/>`,
		"fallback": "uim:arrow-circle-down",
	});
}

export default Component;

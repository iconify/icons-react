import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlre_ubfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlre_ubfh"/>`,
		"fallback": "ri:file-warning-line",
	});
}

export default Component;

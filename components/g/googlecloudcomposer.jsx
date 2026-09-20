import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnbp0cclk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnbp0cclk"/>`,
		"fallback": "simple-icons:googlecloudcomposer",
	});
}

export default Component;

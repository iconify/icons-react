import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyzeesb1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyzeesb1f"/>`,
		"fallback": "mdi:bed-queen",
	});
}

export default Component;

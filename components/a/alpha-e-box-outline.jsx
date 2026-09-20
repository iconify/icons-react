import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anfyuydls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anfyuydls"/>`,
		"fallback": "mdi:alpha-e-box-outline",
	});
}

export default Component;

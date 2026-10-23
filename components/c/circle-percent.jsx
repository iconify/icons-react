import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd4k1e73q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd4k1e73q"/>`,
		"fallback": "vadivam:circle-percent",
	});
}

export default Component;

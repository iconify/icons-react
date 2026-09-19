import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtt6g2roz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtt6g2roz"/>`,
		"fallback": "garden:clipboard-list-fill-16",
	});
}

export default Component;

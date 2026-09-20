import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qixqk7d2s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qixqk7d2s"/>`,
		"fallback": "la:accessible-icon",
	});
}

export default Component;

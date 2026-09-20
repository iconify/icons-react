import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic27p1byo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic27p1byo"/>`,
		"fallback": "simple-icons:fairphone",
	});
}

export default Component;

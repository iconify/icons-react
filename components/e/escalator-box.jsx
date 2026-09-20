import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm9f6lmtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nm9f6lmtb"/>`,
		"fallback": "mdi:escalator-box",
	});
}

export default Component;

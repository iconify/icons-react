import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyhpmm--v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyhpmm--v"/>`,
		"fallback": "keyline-icons:gallery-horizontal-start",
	});
}

export default Component;

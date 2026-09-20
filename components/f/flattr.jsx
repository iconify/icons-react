import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dix-4rb8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dix-4rb8v"/>`,
		"fallback": "mdi:flattr",
	});
}

export default Component;

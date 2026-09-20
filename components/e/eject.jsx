import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xf0d24blu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xf0d24blu"/>`,
		"fallback": "typcn:eject",
	});
}

export default Component;
